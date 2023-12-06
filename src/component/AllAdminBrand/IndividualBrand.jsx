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
              <div className='indi-brand-ico-tag'>
                <Image src={BackIcon.src} width={20} height={20} alt='' />
                <label
                  className='form-check-label single-checkbox-text'
                  for='flexCheckDefault'>
                  Account
                </label>
              </div>
              <p className='indu-brand-edit'>Edit</p>
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
              <p className='contact-word'>Contact person</p>
            </div>
          </div>
          <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
            <input className='kibo-inputs' type='text' placeholder='KIBO' />
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
            />
          </div>

          <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 pb-2'>
            <div className='kibo-img-div'>
              <p className='contact-word'>Number of products</p>
            </div>
          </div>
          <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
            <div className='number-of-div'>
              <p>100</p>
              <p className='indu-brand-edit'>View all</p>
            </div>
          </div>
          <hr className='indi-brand-hr' />
          <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 pb-2'>
            <div className='kibo-img-div'>
              <p className='contact-word'>Number of items</p>
            </div>
          </div>
          <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
            <div className='number-of-div'>
              <p>500</p>
              <p className='indu-brand-edit'>View all</p>
            </div>
          </div>
          <hr className='indi-brand-hr' />
          <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
            <div className='button-of-div'>
              <button className='reset-btn'>Reset password</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualBrand;
