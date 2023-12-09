"use client";
import React, { useState } from "react";

import Kibo from "../../../public/kibo.png";
import BackIcon from "../../../public/back.svg";
import { toast } from "react-toastify";

import Image from "next/image";
import axiosInstance from "../../../utils/axios";

const CreateBrand = () => {
  // Step 1: Create a state variable for the new component visibility
  const [showBrandSingleProducts, setShowBrandSingleProducts] = useState(false);

  // Step 2: Add an event handler to show/hide the BrandSingleProducts component
  const handleThreeDotsClick = () => {
    setShowBrandSingleProducts(!showBrandSingleProducts);
  };

  const [imageSrc, setImageSrc] = useState("/kibo.png"); // Set the initial image source




  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setFiles(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadstart = () => console.log("Loading started");
      reader.onprogress = () => console.log("Loading in progress");
      reader.onloadend = () => {
        console.log("Loading finished");
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const [files, setFiles] = useState();
  const [formData, setFormData] = useState({
    name: "",
    contact_person: "",
    contact_number: "",
    contact_email: "",
    website: "",
    password: ""
  })
  const handleFormData = (e) => {
    const { name, value } = e.target;

    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let token = "";
    if (typeof window !== "undefined") {
      token = localStorage.getItem("refreshToken");
    }
    const brandFormData = new FormData();
    brandFormData.append('logo', files);
    brandFormData.append('name', formData.name);
    brandFormData.append('contact_person', formData.contact_person);
    brandFormData.append('contact_number', formData.contact_number);
    brandFormData.append('contact_email', formData.contact_email);
    brandFormData.append('website', formData.website);
    brandFormData.append('password', formData.password);


    axiosInstance.post("/save-brand", brandFormData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.data.status == 200) {
        toast.success(res.data.message, {
          position: "top-right",
          style: {
            background: "white",
            color: "black",
          },
        });
        router.push("/admin/brands/view");
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

  }
  console.log(files);
  return (
    <div>
      <div className='individual-product-div'>
        <form method="post" onSubmit={handleFormSubmit}>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
              <div className='indi-brand-head-tags'>
                <div className='indi-brand-ico-tag'>
                  <Image src={BackIcon} width={20} height={20} alt='' />
                  <label
                    className='form-check-label single-checkbox-text'
                    for='flexCheckDefault'>
                    View all brands - add new brand
                  </label>
                  {/* <label
                  className='form-check-label single-checkbox-text'
                  for='flexCheckDefault'>
                  Account
                </label> */}
                </div>
                <div className='edit-delete-div'>
                  <p className='indu-brand-edit'>Save</p>
                  <p className='indu-brand-edits'>Delete</p>
                </div>
              </div>
            </div>

            <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 pb-2'>
              <div className='kibo-imgs-div'>
                <Image
                  className='kibo-imgs'
                  src={imageSrc}
                  height={50}
                  width={70}
                  alt=''
                />
              </div>
            </div>
            <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
              {/* <input className='kibo-inputs' type='text' placeholder='KIBO' /> */}
              <div className='kibo-upload-icon'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='#88C9D7'
                  class='bi bi-upload'
                  viewBox='0 0 16 16'>
                  <path d='M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5' />
                  <path d='M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z' />
                </svg>
                <span className='kibo-upload'>
                  <label htmlFor='fileInput'>Upload Image</label>
                  <input
                    type='file'
                    id='fileInput'
                    style={{ display: "none" }}
                    onChange={handleImageUpload}
                    accept="image/jpeg, image/jpg, image/png"
                  />
                </span>
              </div>
            </div>

            <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 pb-2'>
              <div className='kibo-img-div'>
                <p className='contact-word'>Name *</p>
              </div>
            </div>
            <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
              <input className='kibo-inputs' type='text' placeholder='KIBO' value={formData.name} name="name" onChange={handleFormData} required />
            </div>

            <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 pb-2'>
              <div className='kibo-img-div'>
                <p className='contact-word'>Contact person</p>
              </div>
            </div>
            <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
              <input className='kibo-inputs' type='text' placeholder='KIBO' value={formData.contact_person} name="contact_person" onChange={handleFormData} />
            </div>

            <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 pb-2'>
              <div className='kibo-img-div'>
                <p className='contact-word'>Contact number</p>
              </div>
            </div>
            <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
              <input
                className='kibo-inputs'
                type='number'
                placeholder='+852 24210010'
                name="contact_number"
                onChange={handleFormData}
                value={formData.contact_number}
              />
            </div>

            <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 pb-2'>
              <div className='kibo-img-div'>
                <p className='contact-word'>Contact email</p>
              </div>
            </div>
            <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
              <input
                className='kibo-inputs'
                type='email'
                placeholder='hello@kibo.eco'
                name="contact_email"
                onChange={handleFormData}
                value={formData.contact_email}
              />
            </div>

            <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 pb-2'>
              <div className='kibo-img-div'>
                <p className='contact-word'>Website</p>
              </div>
            </div>
            <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
              <input
                className='kibo-inputs'
                type='text'
                placeholder='https://kibo.eco/'
                name="website"
                onChange={handleFormData}
                value={formData.website}
              />
            </div>

            <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 pb-2'>
              <div className='kibo-img-div'>
                <p className='contact-word'>Password</p>
              </div>
            </div>
            <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
              <input
                className='kibo-inputs'
                type='password'
                placeholder='*********'
                name="password"
                onChange={handleFormData}
                value={formData.password}
              />
            </div>


            <hr className='indi-brand-hr' />
            {/* <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 pb-2'>
            <div className='kibo-img-div'>
              <p className='contact-word'>Number of items</p>
            </div>
          </div>
          <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
            <div className='number-of-div'>
              <p>500</p>
              <p className='indu-brand-edit'>View all</p>
            </div>
          </div> */}
            {/* <hr className='indi-brand-hr' /> */}
            <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
              <div className='button-of-div'>
                <button className='reset-btn'>Create account</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBrand;
