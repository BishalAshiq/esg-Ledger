"use client";
import Nav from "@/component/Navbar/Nav";
import React, { Component } from "react";
// import Slider from "react-slick";
import LoginBanner from "../../../public/loginBanner.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const page = () => {
  var settings = {
    dots: true,
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
    <div>
      <div>
        <Nav />
      </div>
      <div className='hr' />
      <Slider {...settings}>
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
        </div>
        <div>
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
        </div>
        <div>
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
        <div>
          <div>
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
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
      </Slider>
      <div className='hrs' />

      <div className='pioneeringtext'>
        <p>
          A pioneering blockchain-driven
          <br /> platform under OneChain®
        </p>
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
