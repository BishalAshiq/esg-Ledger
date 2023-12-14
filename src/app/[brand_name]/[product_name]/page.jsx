"use client";
import React, { useEffect, useState } from "react";
import styles from "./brandsProduct.module.css";
import Nav from "@/component/Navbar/Nav";
import checkdash from "../../../../public/checkdash.svg";
import pageLogo from "../../../../public/pageLogomd.png";
import pageicon1 from "../../../../public/social1.svg";
import pageicon2 from "../../../../public/social2.svg";
import pageicon3 from "../../../../public/social3.svg";
import pageicon4 from "../../../../public/social4.svg";
// import pageicon4 from "../../../../public/social4.svg";
import certified from "../../../../public/certified.svg";
import copy from "../../../../public/copy.svg";
import redix from "../../../../public/redix.png";
import Image from "next/image";
import { useParams } from "next/navigation";
import axiosInstance from "../../../../utils/axios";
import Link from "next/link";

const page = () => {
  const param = useParams();
  const [item, setItem] = useState({});
  const [attribute, setAttribute] = useState("");
  const [column, setColumn] = useState("");
  useEffect(() => {
    axiosInstance
      .get("item-details/" + param.brand_name + "/" + param.product_name)
      .then((res) => {
        setItem(res.data.data);
        console.log(res.data.data);
        const parsedAttribute = JSON.parse(res.data.data.attribute);
        console.log(parsedAttribute);
        // Set the parsed object in the state
        setAttribute(parsedAttribute);
        setColumn(res.data.category_arr);
        console.log(parsedAttribute['Product'])
      });
  }, []);

  const formateDate = (dateString) => {
    // const dateString = '2023-11-22T18:32:49.000000Z';
    const dateObject = new Date(dateString);

    // Format the date as "d M, Y"
    const options = { day: "numeric", month: "short", year: "numeric" };
    const formatted = dateObject.toLocaleDateString("en-US", options);
    return formatted;
  };

  const [activeAccordion, setActiveAccordion] = useState("");
  const [activeAccordion2, setActiveAccordion2] = useState("");
  const [activeAccordion3, setActiveAccordion3] = useState("");
  const [activeAccordion4, setActiveAccordion4] = useState("");
  const [activeAccordion5, setActiveAccordion5] = useState("");

  const handleAccordionClick = (accordionId) => {
    setActiveAccordion((prevAccordion) =>
      prevAccordion === accordionId ? "" : accordionId
    );
  };

  const isAccordionExpanded = (accordionId) => {
    return activeAccordion === accordionId;
  };

  const toggleAccordion = (accordionId) => {
    if (isAccordionExpanded(accordionId)) {
      setActiveAccordion("");
    } else {
      setActiveAccordion(accordionId);
    }
  };

  const handleAccordionClicks = (accordionId) => {
    setActiveAccordion2((prevAccordions) =>
      prevAccordions === accordionId ? "" : accordionId
    );
  };

  const isAccordionExpanded2 = (accordionId) => {
    return activeAccordion2 === accordionId;
  };

  const toggleAccordion2 = (accordionId) => {
    if (isAccordionExpanded2(accordionId)) {
      setActiveAccordion2("");
    } else {
      setActiveAccordion2(accordionId);
    }
  };

  const handleAccordionClick3 = (accordionId) => {
    setActiveAccordion3((prevAccordion3) =>
      prevAccordion3 === accordionId ? "" : accordionId
    );
  };

  const isAccordionExpanded3 = (accordionId) => {
    return activeAccordion3 === accordionId;
  };

  const toggleAccordion3 = (accordionId) => {
    if (isAccordionExpanded3(accordionId)) {
      setActiveAccordion3("");
    } else {
      setActiveAccordion3(accordionId);
    }
  };
  const handleAccordionClick4 = (accordionId) => {
    setActiveAccordion4((prevAccordion4) =>
      prevAccordion4 === accordionId ? "" : accordionId
    );
  };

  const isAccordionExpanded4 = (accordionId) => {
    return activeAccordion4 === accordionId;
  };

  const toggleAccordion4 = (accordionId) => {
    if (isAccordionExpanded4(accordionId)) {
      setActiveAccordion4("");
    } else {
      setActiveAccordion4(accordionId);
    }
  };
  const handleAccordionClick5 = (accordionId) => {
    setActiveAccordion5((prevAccordion5) =>
      prevAccordion5 === accordionId ? "" : accordionId
    );
  };

  const isAccordionExpanded5 = (accordionId) => {
    return activeAccordion5 === accordionId;
  };

  const toggleAccordion5 = (accordionId) => {
    if (isAccordionExpanded5(accordionId)) {
      setActiveAccordion5("");
    } else {
      setActiveAccordion5(accordionId);
    }
  };

  const processString = (inputString) => {
    // Split the string by "/"
    const values = inputString.split("/");

    if (values.length > 0) {
      const processedValues = values.map((value, index) => (
        <React.Fragment key={index}>
          {value} <br />
        </React.Fragment>
      ));
      return processedValues;
    } else {
      return values;
    }
  };
  return (
    <div className='individual'>
      {" "}
      <div className={styles["background-img"]}>
        <div>
          <Nav />
        </div>

        <div className='certificate-full-div'>
          <div className='row mt-4'>
            <div className='col-12 col-sm-2 col-md-2 col-lg-2 col-xl-2'></div>

            <div className='col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3'>
              <div className=' redix-div'>
                <div className='redix-divs'>
                  <div className='certificate-image-div'>
                    <Image
                      className='certificate-image'
                      src={certified.src}
                      width={44}
                      height={40}
                      alt=''
                    />
                  </div>

                  <div className='certificate-tags-div'>
                    <h2 className='certificate-tags'>
                      THE BLOCKCHAIN CERTIFICATE
                    </h2>
                    <span className='certificate-ptag'>區塊鏈防偽證書</span>
                    <span className='certificate-ptag'>by OneChain®</span>
                  </div>

                  <div className='certificate-des-div'>
                    <h5 className='certificate-h5Tag'>
                      This Certificate has been securely recorded on the
                      blockchain, ensuring its transparency and immutable
                      record. It is applicable to products produced in strict
                      compliance with ESG requirements as listed below.
                    </h5>

                    <h5 className='certificate-h5Tag'>
                      此證書已安全記錄於區塊鏈上，確保其透明性和不可變紀錄。適用於嚴格符合以下列出的ESG要求的產品
                    </h5>
                  </div>

                  <div className='certificate-imageSec-div'>
                    <img src={redix.src} alt='' />
                  </div>
                </div>
              </div>
            </div>

            <div className='col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 '>
              <div className='redix-sec-div'>
                <div className='redixSec-div'>
                  <div className='Blockchain-tagone-div'>
                    <h5 className='Blockchain-tagone'>
                      Blockchain Transaction Hx 區塊鏈上鏈紀錄
                    </h5>
                  </div>
                  <Link
                    className='no-decoration'
                    href={`https://www.onechainscan.io/transaction/${item.block_chain_url}`}
                    target='_blank'>
                    <div className='Blockchain-tagotwo-div'>
                      <Image src={copy.src} width={20} height={20} alt='' />
                      <h5 className='Blockchain-tagotwo'>
                        {item.block_chain_url}
                      </h5>
                    </div>
                  </Link>
                  <div className='Blockchain-tagone-div'>
                    <h5 className='Blockchain-tagone'>
                      Issue Date 區塊鏈上鏈日期
                    </h5>
                  </div>

                  <div className='Blockchain-ptag-div'>
                    <p>{formateDate(item.created_at)}</p>
                  </div>
                  {/* <div className='Blockchain-ptag-divs'>
                    <p className='block-ptext'>Brand Name 型號</p>
                    <h5 className='blockchain-h5'> {item.brand_name}</h5>
                  </div>
                  <div className='Blockchain-ptag-divs'>
                    <p className='block-ptext'>Item 物品</p>
                    <h5 className='blockchain-h5'> {item.item}</h5>
                    <h5 className='blockchain-h5'>木製復古遊戲機 </h5>
                  </div> */}
{/* 
                  {Object.entries(attribute).map(([key, value]) => (
                    <>
                      {key != "" && value != "" ? (
                        <div className='Blockchain-ptag-divs'>
                          <p className='block-ptext'>{key} </p>
                          <h5 className='blockchain-h5'>
                            {processString(value)}
                          </h5>
                        </div>
                      ) : (
                        <></>
                      )}
                    </>
                  ))} */}

                  {/* {Object.entries(column).map(([key, value]) => (
                    <>
                      {key != "" && value != "" ? (
                        <div className='Blockchain-ptag-divs'>
                          <p className='block-ptext'>{key} </p>
                          <h5 className='blockchain-h5'>
                            {processString(value)}
                          </h5>
                        </div>
                      ) : (
                        <></>
                      )}
                    </>
                  ))} */}

                  {/* <div className='Blockchain-ptag-divs'>
                  <p className='block-ptext'>Product - Front 產品正面</p>
                  <h5 className='blockchain-h5'>
                    Hong Kong Timber - Oak 香港木材 - 橡木
                  </h5>
                </div>
                <div className='Blockchain-ptag-divs'>
                  <p className='block-ptext'>Product - Rear 產品背面</p>
                  <h5 className='blockchain-h5'>
                    Hong Kong Timber - Pine 香港木材 - 松木
                  </h5>
                </div>
                <div className='Blockchain-ptag-divs'>
                  <p className='block-ptext'>
                    Other parts of the product 產品其他位置{" "}
                  </p>
                  <h5 className='blockchain-h5'>
                    Hong Kong Timber - Cherry, Taiwan Acacia 香港木材 - 櫻桃木,
                    台灣相思木
                  </h5>
                </div>
                <div className='Blockchain-ptag-divs'>
                  <p className='block-ptext'>
                    Other parts of the product 產品其他位置{" "}
                  </p>
                  <h5 className='blockchain-h5'>
                    Hong Kong Timber - Cherry, Taiwan Acacia 香港木材 - 櫻桃木,
                    台灣相思木
                  </h5>
                </div>
                <div className='Blockchain-ptag-divs'>
                  <p className='block-ptext'>Designer 產品設計 </p>
                  <h5 className='blockchain-h5'>
                    RediX Technology Co. Ltd 煒狄科技有限公司
                  </h5>
                </div>
                <div className='Blockchain-ptag-divs'>
                  <p className='block-ptext'>Manufacturer 製造商 </p>
                  <h5 className='blockchain-h5'>
                    Methodist Centre 循道衛理中心
                  </h5>
                </div> */}

                  {/* <div className=''>
                    <div className='accordion' id='accordionExample'>
                      <div className='accordion-item'>

                        <div className='accor-tag-div'>
                          <h6 className='accordion-header'>
                            <div
                              className={`accordion-button ${isAccordionExpanded("collapseOne")
                                  ? ""
                                  : "collapsed"
                                }`}
                              type='button'
                              data-bs-toggle='collapse'
                              data-bs-target='#collapseOne'
                              aria-expanded={isAccordionExpanded("collapseOne")}
                              aria-controls='collapseOne'
                              onClick={() =>
                                handleAccordionClick("collapseOne")
                              }>
                              <span className='uppor'> Upper</span>
                            </div>
                          </h6>

                          <div className='chevron-icon'>
                            {isAccordionExpanded("collapseOne") ? (
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='16'
                                height='16'
                                fill='currentColor'
                                className='bi bi-chevron-up'
                                viewBox='0 0 16 16'
                                onClick={() => toggleAccordion("collapseOne")}>
                                <path
                                  fill-rule='evenodd'
                                  d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='16'
                                height='16'
                                fill='currentColor'
                                className='bi bi-chevron-down'
                                viewBox='0 0 16 16'
                                onClick={() => toggleAccordion("collapseOne")}>
                                <path
                                  fill-rule='evenodd'
                                  d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
                                />
                              </svg>
                            )}
                          </div>
                        </div>

                        <div
                          id='collapseOne'
                          className={`accordion-collapse collapse ${isAccordionExpanded("collapseOne") ? "show" : ""
                            }`}
                          data-bs-parent='#accordionExample'>
                          <div className='accordion-body'>
                            <div className='Blockchain-ptag-div'>
                              <p>{formateDate(item.created_at)}</p>
                            </div>

                            {Object.entries(attribute).map(([key, value]) => (
                              <>
                                {key != "" && value != "" ? (
                                  <div className='Blockchain-ptag-divs'>
                                    <p className='block-ptext'>{key} </p>
                                    <h5 className='blockchain-h5'>
                                      {value} <br />{" "}
                                    </h5>
                                  </div>
                                ) : (
                                  <></>
                                )}
                              </>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className='accordion-item'>

                        <div className='accor-tag-div'>
                          <h6 className='accordion-header'>
                            <div
                              className={`accordion-button ${isAccordionExpanded2("collapseTwo")
                                  ? ""
                                  : "collapsed"
                                }`}
                              type='button'
                              data-bs-toggle='collapse'
                              data-bs-target='#collapseTwo'
                              aria-expanded={isAccordionExpanded2(
                                "collapseTwo"
                              )}
                              aria-controls='collapseTwo'
                              onClick={() =>
                                handleAccordionClicks("collapseTwo")
                              }>
                              Tongue
                            </div>
                          </h6>

                          <div className='chevron-icon'>
                            {isAccordionExpanded2("collapseTwo") ? (
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='16'
                                height='16'
                                fill='currentColor'
                                className='bi bi-chevron-up'
                                viewBox='0 0 16 16'
                                onClick={() => toggleAccordion2("collapseTwo")}>
                                <path
                                  fill-rule='evenodd'
                                  d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='16'
                                height='16'
                                fill='currentColor'
                                className='bi bi-chevron-down'
                                viewBox='0 0 16 16'
                                onClick={() => toggleAccordion2("collapseTwo")}>
                                <path
                                  fill-rule='evenodd'
                                  d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
                                />
                              </svg>
                            )}
                          </div>
                        </div>

                        <div
                          id='collapseTwo'
                          className={`accordion-collapse collapse ${isAccordionExpanded2("collapseTwo") ? "show" : ""
                            }`}
                          data-bs-parent='#accordionExample'>
                          <div className='accordion-body'>
                            <div className='Blockchain-ptag-div'>
                              <p>{formateDate(item.created_at)}</p>
                            </div>

                            {Object.entries(attribute).map(([key, value]) => (
                              <>
                                {key != "" && value != "" ? (
                                  <div className='Blockchain-ptag-divs'>
                                    <p className='block-ptext'>{key} </p>
                                    <h5 className='blockchain-h5'>
                                      {value} <br />{" "}
                                    </h5>
                                  </div>
                                ) : (
                                  <></>
                                )}
                              </>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className='accordion-item'>

                        <div className='accor-tag-div'>
                          <h6 className='accordion-header'>
                            <div
                              className={`accordion-button ${isAccordionExpanded3("collapsethree")
                                  ? ""
                                  : "collapsed"
                                }`}
                              type='button'
                              data-bs-toggle='collapse'
                              data-bs-target='#collapsethree'
                              aria-expanded={isAccordionExpanded3(
                                "collapsethree"
                              )}
                              aria-controls='collapsethree'
                              onClick={() =>
                                handleAccordionClick3("collapsethree")
                              }>
                              Lining
                            </div>
                          </h6>

                          <div className='chevron-icon'>
                            {isAccordionExpanded3("collapsethree") ? (
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='16'
                                height='16'
                                fill='currentColor'
                                className='bi bi-chevron-up'
                                viewBox='0 0 16 16'
                                onClick={() =>
                                  toggleAccordion3("collapsethree")
                                }>
                                <path
                                  fill-rule='evenodd'
                                  d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='16'
                                height='16'
                                fill='currentColor'
                                className='bi bi-chevron-down'
                                viewBox='0 0 16 16'
                                onClick={() =>
                                  toggleAccordion3("collapsethree")
                                }>
                                <path
                                  fill-rule='evenodd'
                                  d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
                                />
                              </svg>
                            )}
                          </div>
                        </div>

                        <div
                          id='collapsethree'
                          className={`accordion-collapse collapse ${isAccordionExpanded3("collapsethree") ? "show" : ""
                            }`}
                          data-bs-parent='#accordionExample'>
                          <div className='accordion-body'>
                            <div className='Blockchain-ptag-div'>
                              <p>{formateDate(item.created_at)}</p>
                            </div>
                          
                            {Object.entries(attribute).map(([key, value]) => (
                              <>
                                {key != "" && value != "" ? (
                                  <div className='Blockchain-ptag-divs'>
                                    <p className='block-ptext'>{key} </p>
                                    <h5 className='blockchain-h5'>
                                      {value} <br />{" "}
                                    </h5>
                                  </div>
                                ) : (
                                  <></>
                                )}
                              </>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className='accordion-item'>

                        <div className='accor-tag-div'>
                          <h6 className='accordion-header'>
                            <div
                              className={`accordion-button ${isAccordionExpanded4("collapsefour")
                                  ? ""
                                  : "collapsed"
                                }`}
                              type='button'
                              data-bs-toggle='collapse'
                              data-bs-target='#collapsefour'
                              aria-expanded={isAccordionExpanded4(
                                "collapsefour"
                              )}
                              aria-controls='collapsefour'
                              onClick={() =>
                                handleAccordionClick4("collapsefour")
                              }>
                              Shoelaces
                            </div>
                          </h6>

                          <div className='chevron-icon'>
                            {isAccordionExpanded4("collapsefour") ? (
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='16'
                                height='16'
                                fill='currentColor'
                                className='bi bi-chevron-up'
                                viewBox='0 0 16 16'
                                onClick={() =>
                                  toggleAccordion4("collapsefour")
                                }>
                                <path
                                  fill-rule='evenodd'
                                  d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='16'
                                height='16'
                                fill='currentColor'
                                className='bi bi-chevron-down'
                                viewBox='0 0 16 16'
                                onClick={() =>
                                  toggleAccordion4("collapsefour")
                                }>
                                <path
                                  fill-rule='evenodd'
                                  d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
                                />
                              </svg>
                            )}
                          </div>
                        </div>

                        <div
                          id='collapsefour'
                          className={`accordion-collapse collapse ${isAccordionExpanded4("collapsefour") ? "show" : ""
                            }`}
                          data-bs-parent='#accordionExample'>
                          <div className='accordion-body'>
                            <div className='Blockchain-ptag-div'>
                              <p>{formateDate(item.created_at)}</p>
                            </div>
                           
                            {Object.entries(attribute).map(([key, value]) => (
                              <>
                                {key != "" && value != "" ? (
                                  <div className='Blockchain-ptag-divs'>
                                    <p className='block-ptext'>{key} </p>
                                    <h5 className='blockchain-h5'>
                                      {value} <br />{" "}
                                    </h5>
                                  </div>
                                ) : (
                                  <></>
                                )}
                              </>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className='accordion-item'>

                        <div className='accor-tag-div'>
                          <h6 className='accordion-header'>
                            <div
                              className={`accordion-button ${isAccordionExpanded5("collapsefive")
                                  ? ""
                                  : "collapsed"
                                }`}
                              type='button'
                              data-bs-toggle='collapse'
                              data-bs-target='#collapsefive'
                              aria-expanded={isAccordionExpanded5(
                                "collapsefive"
                              )}
                              aria-controls='collapsefive'
                              onClick={() =>
                                handleAccordionClick5("collapsefive")
                              }>
                              Outsole
                            </div>
                          </h6>

                          <div className='chevron-icon'>
                            {isAccordionExpanded5("collapsefive") ? (
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='16'
                                height='16'
                                fill='currentColor'
                                className='bi bi-chevron-up'
                                viewBox='0 0 16 16'
                                onClick={() =>
                                  toggleAccordion5("collapsefive")
                                }>
                                <path
                                  fill-rule='evenodd'
                                  d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='16'
                                height='16'
                                fill='currentColor'
                                className='bi bi-chevron-down'
                                viewBox='0 0 16 16'
                                onClick={() =>
                                  toggleAccordion5("collapsefive")
                                }>
                                <path
                                  fill-rule='evenodd'
                                  d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
                                />
                              </svg>
                            )}
                          </div>
                        </div>

                        <div
                          id='collapsefive'
                          className={`accordion-collapse collapse ${isAccordionExpanded5("collapsefive") ? "show" : ""
                            }`}
                          data-bs-parent='#accordionExample'>
                          <div className='accordion-body'>
                            <div className='Blockchain-ptag-div'>
                              <p>{formateDate(item.created_at)}</p>
                            </div>
                           
                            {Object.entries(attribute).map(([key, value]) => (
                              <>
                                {key != "" && value != "" ? (
                                  <div className='Blockchain-ptag-divs'>
                                    <p className='block-ptext'>{key} </p>
                                    <h5 className='blockchain-h5'>
                                      {value} <br />{" "}
                                    </h5>
                                  </div>
                                ) : (
                                  <></>
                                )}
                              </>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  <div className='Information-full-divs'>
                    <p>Important Information:</p>
                    <ol>
                      <li className='block-ptwotext'>
                        This certificate is non-transferable and is permanently
                        recorded on the blockchain
                      </li>
                      <li className='block-ptwotext'>
                        For any inquiries or concerns, feel free to contact us
                        at enquiries@esgledger.co
                      </li>
                    </ol>
                  </div>

                  <div className='Information-full-div'>
                    <p className='block-ptwotextcs'>重要信息:</p>

                    <ol>
                      <li className='block-ptwotextc'>
                        此證書不可轉讓，已永久記錄在區塊鏈上。
                      </li>
                      <li className='block-ptwotextc cc-mob'>
                        如有任何疑問或關切事項 可電郵至:
                        <span className='block-ptwotext-add'>
                          {" "}
                          enquiries@esgledger.co
                        </span>
                        。
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-2 col-md-2 col-lg-2 col-xl-2'></div>
          </div>
        </div>

        <div className='logins-footer-div'>
          <div className='logins-footer-full-div row'>
            <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'></div>
            <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
              <div className='footer-img-div'>
                <img className='footer-img' src={pageLogo.src} alt='' />
                <p className='fotter-ptext'>
                  For inquiries or more information please contact:
                  enquiries@esgledger.co
                </p>
              </div>
            </div>

            <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
              <div className='footer-text-div'>
                <p className='footer-textpp'>Join the Community</p>

                <div className='footer-text-icon'>
                  <img className='social-icon' src={pageicon4.src} alt='' />
                  <img className='social-icon' src={pageicon3.src} alt='' />
                  <img className='social-icon' src={pageicon2.src} alt='' />
                  <img className='social-icon' src={pageicon1.src} alt='' />
                </div>
                <p className='footer-textpps'>Join the Community</p>
              </div>
            </div>

            <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'></div>
          </div>
          <div className='ffs-div'>
            <div className='row'>
              <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'></div>
              <div className='col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8'>
                <div className=''>
                  <hr className='f-hr' />
                  <p className='f-text'>© 2023 OneChain Ltd.</p>
                  <div className='footer-privacy-div'>
                    <Link className='footer-privacy-text' href='/'>
                      <p>Privacy Policy </p>
                    </Link>
                    <Link className='footer-privacy-text' href='/'>
                      <p>Terms of Service </p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
