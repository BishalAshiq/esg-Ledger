"use client";
import Nav from "@/component/Navbar/Nav";
import React, { Component } from "react";
// import Slider from "react-slick";
import LoginBanner from "../../../public/loginBanner.png";
import pageLogo from "../../../public/pageLogomd.png";
import pageicon1 from "../../../public/social1.svg";
import pageicon2 from "../../../public/social2.svg";
import pageicon3 from "../../../public/social3.svg";
import pageicon4 from "../../../public/social4.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../login/login.module.css";

const page = () => {
  var settings = {
    dots: true,
    color: "white",
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles["background-img"]}>
      <div>
        <Nav />
      </div>
      <div className='hr' />
      <Slider {...settings}>
        <div>
          <div className='fist-slider-text-div'>
            <h1>
              Unlocking ESG Trust and Transparency with Block chain integrity
            </h1>
          </div>
        </div>
        <div>
          <div className='p-3'>
            <div className=' login-banner-img-input-div'>
              <div className='login-banner-img-div'>
                <img
                  className='login-banner-img'
                  src={LoginBanner.src}
                  alt=''
                />
              </div>
              <div className='login-banner-inputs-div'>
                <h6>Admin Login</h6>

                <div>
                  {" "}
                  <label for='email'>Email</label> <br />
                  <input type='email' id='email' name='email' />
                </div>
                <div>
                  {" "}
                  <label for='email'>Password</label> <br />
                  <input type='password' id='Password' name='password' />
                </div>
                <p>Forget Password</p>

                <input type='submit' />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='p-3'>
            <div className=' login-banner-img-input-div'>
              <div className='login-banner-img-div'>
                <img
                  className='login-banner-img'
                  src={LoginBanner.src}
                  alt=''
                />
              </div>
              <div className='login-banner-inputs-div'>
                <h6>Admin Login</h6>

                <div>
                  {" "}
                  <label for='email'>Email</label> <br />
                  <input type='email' id='email' name='email' />
                </div>
                <div>
                  {" "}
                  <label for='email'>Password</label> <br />
                  <input type='password' id='Password' name='password' />
                </div>
                <p>Forget Password</p>

                <input type='submit' />
              </div>
            </div>
          </div>
        </div>
      </Slider>
      <div className='hrs' />

      <div className='pioneeringtext'>
        <p>
          A pioneering blockchain-driven
          <br /> platform under OneChain®
        </p>
      </div>

      <div className='login footer'>
        <div>
          <div>
            <img src={pageLogo.src} alt='' />
            <p>
              For inquiries or more information <br />
              please contact: enquiries@esgledger.co
            </p>
          </div>
          <div>
            <p>Join the Community</p>

            <div>
              <img src={pageicon1.src} alt='' />
              <img src={pageicon2.src} alt='' />
              <img src={pageicon3.src} alt='' />
              <img src={pageicon4.src} alt='' />
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <div className='hr' />
        <div className=' login-banner-img-input-div'>
          <div className='login-banner-img-div'>
            <img className='login-banner-img' src={LoginBanner.src} alt='' />
          </div>
          <div className='login-banner-inputs-div'>
            <h6>Admin Login</h6>

            <div>
              {" "}
              <label for='email'>Email</label> <br />
              <input type='email' id='email' name='email' />
            </div>
            <div>
              {" "}
              <label for='email'>Password</label> <br />
              <input type='password' id='Password' name='password' />
            </div>
            <p>Forget Password</p>

            <input type='submit' />
          </div>
        </div>
        <div className='hrs' />

        <div className='pioneeringtext'>
          <p>
            A pioneering blockchain-driven
            <br /> platform under OneChain®
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default page;
