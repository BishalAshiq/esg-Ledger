"use client";
import React, { useEffect, useState } from "react";
import Kibo from "../../../public/kibo.png";
import BackIcon from "../../../public/back.svg";
import ProCopy from "../../../public/procopy.svg";
import Image from "next/image";
import IndiEditBrands from "./IndiEditBrands";
import axiosInstance from "../../../utils/axios";
import { base_url } from "../../../utils/auth";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


const IndividualBrand = ({ brandId }) => {
  const router = useRouter();
  const [showBrandSingleProducts, setShowBrandSingleProducts] = useState(false);
  const handleThreeDotsClick = () => {
    setShowBrandSingleProducts(!showBrandSingleProducts);
  };
  const [brand, setBrand] = useState({});
  const [authToken, setAuthToken] = useState({});

  const [formData, setFormData] = useState({
    brand_id: "",
    name: "",
    contact_person: "",
    contact_number: "",
    contact_email: "",
    website: "",
    brands_item_count: 0,
    logo: ""
  })

  useEffect(() => {
    let token = "";
    if (typeof window !== "undefined") {
      token = localStorage.getItem("refreshToken");
    }
    setAuthToken(token);
    axiosInstance.get('brand-details/' + brandId, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    }).then((result) => {
      if (result.data.status == 200) {
        let brand = result.data.data;
        setFormData(prevFormData => ({
          ...prevFormData,
          brand_id: brand.id,
          name: brand.name,
          contact_person: brand.contact_person,
          contact_number: brand.contact_number,
          contact_email: brand.email,
          website: brand.website,
          logo: brand.logo,
          brands_item_count: brand.brands_item_count
        }));
      }
    })
  }, [])


  const handleFormData = (e) => {
    const { name, value } = e.target;

    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormEdit = (e) => {
    axiosInstance.post('/save-brand', formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${authToken}`,
      },
    }).then((res) => {
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


      if (res.data.status == 200) {
        toast.success(res.data.message, {
          position: "top-right",
          style: {
            background: "white",
            color: "black",
          },
        });
        // router.push("/");
      }
    })
  };

  const hanleBrandDelete = (e) => {
    const deleteFormData = {
      brandId: brandId
    }
    axiosInstance.post('/delete-brand', deleteFormData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${authToken}`,
      },
    }).then((res) => {
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


      if (res.data.status == 200) {
        toast.success(res.data.message, {
          position: "top-right",
          style: {
            background: "white",
            color: "black",
          },
        });
        // router.push("/");
      }
    })
  };
  console.log(base_url, brandId);
  return (
    <div>
      {!showBrandSingleProducts ? (
        <div>
          <div className='individual-product-div'>
            <div className='row'>
              <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                <div className='indi-brand-head-tags'>
                  <div className='indi-brand-ico-tag'>
                    <Image src={BackIcon.src} width={20} height={20} alt='' />
                    <label
                      className='form-check-label single-checkbox-text'
                      for='flexCheckDefault'>
                      View all brands - brand details
                    </label>
                    {/* <label
                  className='form-check-label single-checkbox-text'
                  for='flexCheckDefault'>
                  Account
                </label> */}
                  </div>
                  <div className='edit-delete-div'>
                    <p
                      className='indu-brand-edit'
                      onClick={handleFormEdit}>
                      Edit
                    </p>
                    <p className='indu-brand-edits' onClick={hanleBrandDelete}>Delete</p>
                  </div>
                </div>
              </div>

              <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 pb-2'>
                <div className='kibo-img-div'>
                  {
                    (formData.logo == "" ? <Image
                      className='kibo-img'
                      src={Kibo}
                      height={50}
                      width={70}
                      alt=''
                    /> :
                      <img src={`${base_url}/uploads/${formData.logo}`}
                        height={50}
                        width={70}
                      />
                    )
                  }

                </div>
              </div>
              <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
                <input className='kibo-inputs' type='text' placeholder='KIBO'
                  value={formData.name}
                  name="name"
                  onChange={handleFormData}
                  required />
              </div>

              <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 pb-2'>
                <div className='kibo-img-div'>
                  <p className='contact-word'>Contact person</p>
                </div>
              </div>
              <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
                <input className='kibo-inputs' type='text' placeholder='KIBO'
                  value={formData.contact_person}
                  name="contact_person"
                  onChange={handleFormData}
                  required />
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
                  placeholder='+852 24210010' value={formData.contact_number}
                  name="contact_number"
                  onChange={handleFormData}

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
                  value={formData.contact_email}

                  name="contact_email"
                  onChange={handleFormData}
                  required
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
                  value={formData.website}
                  name="website"
                  onChange={handleFormData}
                  required
                />
              </div>

              <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 pb-2'>
                <div className='kibo-img-div'>
                  <p className='contact-word'>Number of products</p>
                </div>
              </div>
              <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
                <div className='number-of-div'>
                  <p>{formData.brands_item_count}</p>
                  <p className='indu-brand-edit'>View all</p>
                </div>
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
                {/* <div className='button-of-div'>
              <button className='reset-btn'>Reset password</button>
            </div> */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Only render the BrandSingleProducts component when showBrandSingleProducts is true
        <IndiEditBrands />
      )}
    </div>
  );
};

export default IndividualBrand;
