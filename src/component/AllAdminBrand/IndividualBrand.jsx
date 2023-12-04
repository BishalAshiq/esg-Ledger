import React from "react";
import Kibo from "../../../public/kibo.png";
import BackIcon from "../../../public/back.svg";
import ProCopy from "../../../public/procopy.svg";
import Image from "next/image";

const IndividualBrand = () => {
  return (
    <div>
      <div className='individual-product-div'>
        <div className='row'>
          <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
            <div className='indi-brand-head-tags'>
              <div>
                <Image src={BackIcon.src} width={20} height={20} alt='' />
                <label
                  className='form-check-label single-checkbox-text'
                  for='flexCheckDefault'>
                  Account
                </label>
              </div>
              <p>Edit</p>
            </div>
          </div>

          <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 pb-2'>
            <div className='kibo-img-div'>
              <Image
                className='kibo-img'
                src={Kibo}
                height={50}
                width={70}
                alt=''
              />
            </div>
          </div>
          <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
            <input className='kibo-inputs' type='text' placeholder='KIBO' />
          </div>

          <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 pb-2'>
            <div className='kibo-img-div'>
              <p>Contact person</p>
            </div>
          </div>
          <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
            <input className='kibo-inputs' type='text' placeholder='KIBO' />
          </div>

          <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 pb-2'>
            <div className='kibo-img-div'>
              <p>Contact number</p>
            </div>
          </div>
          <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
            <input
              className='kibo-inputs'
              type='number'
              placeholder='+852 24210010'
            />
          </div>

          <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 pb-2'>
            <div className='kibo-img-div'>
              <p>Contact email</p>
            </div>
          </div>
          <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
            <input
              className='kibo-inputs'
              type='email'
              placeholder='hello@kibo.eco'
            />
          </div>

          <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 pb-2'>
            <div className='kibo-img-div'>
              <p>Website</p>
            </div>
          </div>
          <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
            <input
              className='kibo-inputs'
              type='text'
              placeholder='https://kibo.eco/'
            />
          </div>

          <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 pb-2'>
            <div className='kibo-img-div'>
              <p>Number of products</p>
            </div>
          </div>
          <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
            <div className='number-of-div'>
              <p>100</p>
              <p>View all</p>
            </div>
          </div>
          <hr />
          <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 pb-2'>
            <div className='kibo-img-div'>
              <p>Number of items</p>
            </div>
          </div>
          <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
            <div className='number-of-div'>
              <p>500</p>
              <p>View all</p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default IndividualBrand;
