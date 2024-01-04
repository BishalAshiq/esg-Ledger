"use client";
import React, { useState } from "react";
import upFile from "../../../public/download.png";
import Image from "next/image";
import axiosInstance from "../../../utils/axios";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as XLSX from 'xlsx';

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";

import ModalFile from "../../../public/modalfile.svg";
import ModalConferm from "../../../public/successfull-modal.svg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
};
const styletwo = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
};
const stylethree = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
};

const IssuDetails = () => {
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);

  const [headers, setHeaders] = useState([]);
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const totalPages = Math.ceil(columns.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = columns.slice(startIndex, endIndex);
  const [isGenerate, SetIsGenerate] = useState(0);
  const [selectedFileName, setSelectedFileName] = useState("Doc name");
  const [tableContent, setTableContent] = useState(null);


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [opent, setOpent] = React.useState(false);
  const handleOpent = () => setOpent(true);
  const handleCloset = () => setOpent(false);
  const [openthree, setOpenthree] = React.useState(false);
  const handleOpenthree = () => setOpenthree(true);
  const handleClosethree = () => setOpenthree(false);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const router = useRouter();

  const handleDownload = async () => {
    // Make a request to the API endpoint
    try {
      let token = "";
      if (typeof window !== "undefined") {
        token = localStorage.getItem("refreshToken");
      }

      const response = await axiosInstance.get("download-xls", {
        responseType: "blob",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.status == 401) {
        toast.error("Token Failed Please Login", {
          position: "top-right",
          style: {
            background: "white",
            color: "black",
          },
        });
        localStorage.removeItem("refreshToken");
        router.push("/");
      }

      if (response.status == 201) {
        toast.error("Please customize fields first.", {
          position: "top-right",
          style: {
            background: "white",
            color: "black",
          },
        });
      } else {
        const blob = new Blob([response.data], { type: "text/csv" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "brand_cutomize_fields.xlsx";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error("Error downloading CSV:", error);
    }
  };

  const handleFileClick = (e) => {
    e.stopPropagation();
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleFileChange = async (e) => {
    SetIsGenerate(1);
    // console.log("handlefile change");
    const selectedFile = e.target.files[0];
    setSelectedFileName(selectedFile.name || "Doc name");
    const formData = new FormData();
    formData.append("csv_file", e.target.files[0]);

    let token = "";

    if (typeof window !== "undefined") {
      token = localStorage.getItem("refreshToken");
    }

    const reader = new FileReader();
    reader.onload = function (e) {
      const data = e.target.result;

      // Check if the data is not empty before trying to read
      if (data) {
        const workbook = XLSX.read(data, { type: 'binary' });

        // Ensure workbook is defined before accessing its properties
        if (workbook && workbook.SheetNames) {
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];

          // Extract header
          const headers = XLSX.utils.sheet_to_json(sheet, { header: 1 })[0];
          setHeaders(headers);

          // Extract columns
          const columnData = XLSX.utils.sheet_to_json(sheet, { header: 1, range: 2 });
          setColumns(columnData);
        } else {
          console.error('Invalid Excel file');
        }
      } else {
        console.error('Empty file content');
      }
    };

    reader.readAsBinaryString(selectedFile);


    SetIsGenerate(2);
    return;
    axiosInstance
      .post(`/upload-csv`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status == 200) {
          setHeaders(res.data.header);
          setColumns(res.data.data);
          SetIsGenerate(2);
        }
        if (res.data.status == 201) {
          toast.error(res.data.message, {
            position: "top-right",
            style: {
              background: "white",
              color: "black",
            },
          });
        }
        if (res.data.status == 401) {
          toast.error(res.data.message, {
            position: "top-right",
            style: {
              background: "white",
              color: "black",
            },
          });
          localStorage.removeItem("refreshToken");
          router.push("/");
        }
      });
  };

  console.log("headers", headers);
  console.log("columns", columns);
  const handleDelete = (deleteId) => {

    const updatedColumns = [...columns];

    // Remove the row at the specified index
    updatedColumns.splice(deleteId, 1);

    // Update state with the new columns array
    setColumns(updatedColumns);

    toast.success("Item Removed", {
      position: "top-right",
      style: {
        background: "white",
        color: "black",
      },
    });


  };


  const saveMint = (e) => {
    const formData = {
      header: headers,
      column: columns,
    }

    let token = "";

    if (typeof window !== "undefined") {
      token = localStorage.getItem("refreshToken");
    }

    axiosInstance.post('/save-mint-data', formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.data.status == 200) {
        handleOpenthree(true)
      }
      if (res.data.status == 401) {
        toast.error(res.data.message, {
          position: "top-right",
          style: {
            background: "white",
            color: "black",
          },
        });
        localStorage.removeItem("refreshToken");
        router.push("/");

      }
    })
  }


  return (
    <div className='container-fluid'>
      <div className='issuess-upload-full-div'>
        <h6 className='tag-text pb-2'>Upload product data</h6>
        <div className='issue-upload-full-div'>
          <a className='csvs-a' onClick={handleDownload}>
            Download the CSV template
          </a>
          <div className='issue-upload-div' onClick={handleFileClick}>
            <Image
              className='file-image'
              src={upFile.src}
              width={40}
              height={40}
              alt=''
            />
            <p className='csv-textp'>{selectedFileName}</p>
            <p className='csv-textp2'>
              Only CSV and XLSX formats are supported
            </p>
            <input
              type='file'
              id='fileInput'
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </div>
        </div>
      </div>

      <div className='mt-2'>
        <div className='previe-issue-div pt-1'>
          <h6 className='tag-text'>Preview</h6>
          {isGenerate == 2 && (
            <div className='previe-issue-text'>
              <p className='previe-issue-btn-text'>Clear</p>
              <span className='previe-issue-btn-link' onClick={handleOpen}>
                <p className='previe-issue-btn'> Mint</p>
              </span>
            </div>
          )}
        </div>

        <div>
          <div
            className={` issue-data-table-div ${isGenerate != 2 ? "issue-box-details" : ""
              }`}>
            {isGenerate == 0 && (
              <div className='no-file-select-div'>
                <p>No File Select</p>
              </div>
            )}

            {isGenerate == 1 && (
              <div className='no-file-select-div'>
                <p>
                  Generating <span className='loading-dot'>...</span>
                </p>
              </div>
            )}
            <div dangerouslySetInnerHTML={{ __html: tableContent }} />

            {isGenerate == 2 && (
              <table className='full-table'>
                <thead>


                  <tr>
                    {headers?.map((header, i) => (
                      <th className='table-nav' scope='col' key={i}>

                        <span className='table-th'>
                          {header}
                        </span>

                      </th>
                    ))}


                    <th className='table-navs' scope='col'>
                      <span className='table-ths'> QR code</span>
                    </th>
                    {/* <th className='table-navs' scope='col'>
                    <p className='table-ths'> QR code</p>
                  </th> */}
                    <th className='table-navs' scope='col'>
                      <span className='table-ths'> QR code</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {columns.map((item, index) => (
                    <>
                      <tr key={index}>
                        {item?.map((data, i) => {
                          return <td className='data-td' key={i}>
                            <span className='data-th-text'>
                              {data}
                            </span>
                          </td>;
                        })}
                        <td className='data-td'>
                          <span
                            className='data-td cursor-pointer text-red'
                            onClick={() => {
                              handleDelete(index);
                            }}>
                            Delete
                          </span>
                        </td>

                        <td className='data-td'>
                          <div className='issue-svg-div'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              fill='#155C79'
                              className='bi bi-three-dots'
                              viewBox='0 0 16 16'>
                              <path d='M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z' />
                            </svg>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td
                          colSpan={columns.length + 2}
                          className='text-center'></td>
                      </tr>
                      <tr>
                        <td
                          colSpan={columns.length + 2}
                          className='text-center'></td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            )}

            {/* <div className='pagination'>
              <svg
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='#86C6CA'
                class='bi bi-caret-left-fill'
                viewBox='0 0 16 16'>
                <path d='m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z' />
              </svg>

              <span>{` ${currentPage} / ${totalPages}`}</span>

              <svg
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='#86C6CA'
                class='bi bi-caret-right-fill'
                viewBox='0 0 16 16'>
                <path d='m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z' />
              </svg>
            </div> */}
          </div>
        </div>
      </div>
      <Modal
        open={opent}
        onClose={handleCloset}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={styletwo}>
          <div>
            <div className='mod-f-img-div'>
              <div className='spinner-border' role='status'>
                <span className='visually-hidden'>Loading...</span>
              </div>

              <p className='mod-f-buffering-text'>
                Your data is being recorded on the blockchain. Kindly wait a
                moment.
              </p>
            </div>
            {/* <div className='button-div'>
                  <button className='return-m-btn'>RETURN TO EDIT</button>
                  <button className='conferm-m-btn'>CONFIRM TO PROCEED</button>
                </div> */}
          </div>
        </Box>
      </Modal>

      <Modal
        open={openthree}
        onClose={handleClosethree}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={stylethree}>
          <div>
            <div className='mod-f-img-div'>
              <img className='mod-f-img' src={ModalConferm.src} alt='' />

              <p className='mod-f-succes-text'>
                Your data is being recorded on the blockchain. Kindly wait a
                moment.
              </p>
            </div>
            <div className='button-div'>

              <Link className='conferm-m-btn-link' href='/allitems'>
                VIEW MY PRODUCTS
              </Link>
            </div>
          </div>
        </Box>
      </Modal>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <div>
            <div className='mod-f-img-div'>
              <img className='mod-f-img' src={ModalFile.src} alt='' />
              <p className='mod-f-uplod-text'>
                By clicking 'Upload & Mint,'
              </p>
              <p className='mod-f-uplod-textp'>
                your data will be permanently stored on the blockchain, and
                this action cannot be reverted.
              </p>
              <p className='mod-f-uplod-textp2'>
                Please verify all information for accuracy before
                proceeding.
              </p>
            </div>
            <div className='button-div'>
              <button className='return-m-btn' onClick={handleClose}>RETURN TO EDIT</button>
              <button className='conferm-m-btn' onClick={() => {
                saveMint();
                handleOpent(true)
                handleClose()
              }}>CONFIRM TO PROCEED</button>
            </div>
          </div>
        </Box>
      </Modal>

    </div>


  );
};

export default IssuDetails;
