import React from "react";
import styles from "../login/login.module.css";
import Nav from "@/component/Navbar/Nav";
import pageLogo from "../../../public/pageLogomd.png";
import pageicon1 from "../../../public/social1.svg";
import pageicon2 from "../../../public/social2.svg";
import pageicon3 from "../../../public/social3.svg";
import pageicon4 from "../../../public/social4.svg";

const page = () => {
  return (
    <div>
      {" "}
      <div className={styles["background-img"]}>
        <div>
          <Nav />
        </div>
        {/* <div className='hr' /> */}
        {/* <Slider {...settings}>
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
                  <h6 className='ad-tag'>Admin Login</h6>

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

                  <p className='forget-text'>Forget Password</p>

                  <div className='submit-btn-div'>
                    <button className='submit-btn'>Log in</button>
                  </div>
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
                  <div>
                    {" "}
                    <label for='password'>New password</label> <br />
                    <input type='password' id='password' name='Password' />
                  </div>
                  <div className='mt-2'>
                    {" "}
                    <label for='email'>Repeat your new password</label> <br />
                    <input type='password' id='Password' name='password' />
                  </div>

                  <div className='submit-btn-div'>
                    <button className='submit-btn'>Confirm</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider> */}
        {/* <div className='hrs' />

        <div className='pioneeringtext'>
          <p>
            A pioneering blockchain-driven
            <br /> platform under OneChain®
          </p>
        </div>
*/}
        <div className='login-footer-div'>
          <div className='login-footer-full-div row'>
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
                  <img className='social-icon' src={pageicon1.src} alt='' />
                  <img className='social-icon' src={pageicon2.src} alt='' />
                  <img className='social-icon' src={pageicon3.src} alt='' />
                  <img className='social-icon' src={pageicon4.src} alt='' />
                </div>
              </div>
            </div>

            <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'></div>
          </div>
          <div className='ff-div'>
            <hr className='f-hr' />

            <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3'></div>
            <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'></div>

            <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3'></div>
            <p className='f-text'>© 2023 OneChain Ltd.</p>
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
    </div>
  );
};

export default page;
