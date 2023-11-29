"use client";
import React, { useEffect, useState } from "react";
import styles from "../../app/login/login.module.css";
import Nav from "@/component/Navbar/Nav";
import pageLogo from "../../../public/pageLogomd.png";
import pageicon1 from "../../../public/social1.svg";
import pageicon2 from "../../../public/social2.svg";
import pageicon3 from "../../../public/social3.svg";
import pageicon4 from "../../../public/social4.svg";
// import pageicon4 from "../../../../public/social4.svg";
// import certified from "../../../../public/certified.svg";
// import copy from "../../../../public/copy.svg";
// import redix from "../../../../public/redix.png";
import Image from "next/image";
import { useParams } from "next/navigation";
// import axiosInstance from "../../../../utils/axios";
import Link from "next/link";
import pageLogonav from "../../../public/pageLogonav.png";

const page = () => {
  return (
    <div>
      <div className={styles["background-img"]}>
        <div>
          <Nav />
        </div>

        <div className='row'>
          <div className='col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2'></div>
          <div className='col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8'>
            <div className='contactUs-full-div'>
              <div className='contactUs-inputs-div'>
                <div className='row '>
                  <div className='col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9'>
                    <div className='contactUs-inpu-div'>
                      <div>
                        <h3 className='contactUs-tag'>Contact Us</h3>
                        <p className='contactUs-des'>
                          Feel free to reach out to us using the contact
                          information provided below. Whether you're an art
                          enthusiast, a collector, an artist, or a potential
                          partner, your inquiries and feedback are important to
                          us.
                        </p>
                      </div>
                      <div className='mt-5'>
                        <div className='row '>
                          <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                            <div>
                              <label for='name' className='contact-lebel'>
                                Your Name
                              </label>{" "}
                              <br />
                              <input
                                className='contact-inp'
                                type='name'
                                id='name'
                                name='name'
                              />
                            </div>
                          </div>
                          <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                            <div>
                              <label for='Email' className='contact-lebel'>
                                {" "}
                                Your Email
                              </label>{" "}
                              <br />
                              <input
                                className='contact-inp'
                                type='email'
                                id='email'
                                name='Password'
                              />
                            </div>
                          </div>
                          <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 '>
                            <div className='contact-inp-text-div'>
                              <input
                                className='contact-inp-text'
                                type='text'
                                id='text'
                                name='text'
                                placeholder='What’s on your mind?'
                              />
                            </div>
                          </div>
                        </div>
                        <button className='send-btn'>Send It!</button>
                      </div>
                    </div>
                  </div>
                  <div className='col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3'>
                    <div className=''>
                      <h5>GET IN TOUCH</h5>
                      <div>
                        <p>
                          <span>T:</span> (852) 2186 7799
                        </p>
                        <p>
                          <span>E:</span> collab@artledger.co
                        </p>
                        <p>
                          <span>A:</span> Smart-Space 3F, Units 908-915, Level
                          9, Cyberport 3, Core F, 100 Cyberport Road, Hong Kong
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className='about-main-div'>
              <div className='about-div'>
                <div className='about-header-tag-img-div'>
                  <h3>Contact Us</h3>
                  <Image src={pageLogonav} width={100} height={35} alt='' />
                </div>

                <div className='about-header-des-div'>
                  <h6 className='about-header-des-h6'>
                    Unlocking ESG Trust and Transparency with ESGLedger
                  </h6>
                  <p className='about-header-des-p'>
                    Welcome to ESGLedger, where technology meets the world of
                    ESG (Environmental, Social, and Governance) data. We are a
                    pioneering blockchain-driven platform dedicated to
                    revolutionizing the way we ensure the trustworthiness and
                    transparency of ESG information.
                  </p>
                </div>

                <div className='about-header-des-div'>
                  <h6 className='about-header-desc-h6'>Our Mission</h6>
                  <p className='about-header-des-p'>
                    At ESGLedger, our mission is to bridge the gap between data
                    and trust, preserving the integrity of ESG data while making
                    the ESG market more transparent and secure. We believe that
                    every piece of ESG data has a unique story to tell, and it's
                    our goal to ensure that this narrative is recorded and
                    protected for the benefit of businesses, investors, and
                    society as a whole.
                  </p>
                </div>

                <div className='about-header-des-divs'>
                  <h5 className='about-header-desc-h6'>What Sets Us Apart</h5>
                  <h6 className='about-header-des-h6'>
                    Blockchain-Powered Authentication
                  </h6>
                  <p className='about-header-des-p'>
                    ESGLedger harnesses the power of blockchain technology to
                    offer unparalleled trust and transparency in ESG data. By
                    recording every step of ESG data's journey on an immutable
                    blockchain ledger, we provide a level of confidence that is
                    unmatched in the ESG domain.
                  </p>
                  <div className=''>
                    <h6 className='about-header-des-h6'>
                      Advanced Data Linking Technology
                    </h6>
                    <p className='about-header-des-p'>
                      We employ state-of-the-art data linking technology,
                      including robust NFC (Near Field Communication) tags and
                      QR codes, to connect physical products to blockchain data.
                      These features allow businesses to seamlessly bridge the
                      physical and digital worlds, ensuring the authenticity and
                      provenance of ESG data. Our NFC tags are designed to be
                      tamper-proof, guaranteeing the security and reliability of
                      your ESG data's history.
                    </p>
                  </div>
                </div>

                <div className='about-header-des-div'>
                  <h6 className='about-header-desc-h6'>
                    Join Us on the Journey
                  </h6>
                  <p className='about-header-des-p'>
                    Whether you're a business aiming to enhance your ESG
                    credibility, an investor seeking trustworthy data, or
                    someone who values the importance of responsible business
                    practices, ESGLedger welcomes you to join us on our journey.
                    Together, we can redefine the ESG landscape by making it
                    more accessible, secure, and connected than ever before.
                  </p>
                </div>
              </div>

              <div className='about-contacts-des-div'>
                <Link href='/contactUs'>
                  <button className='about-contacts-btn'>Contact Us</button>
                </Link>
                <p className='about-contacts-desp'>
                  Feel free to reach out to us using the contact information
                  provided below. Whether you're a business leader, investor, or
                  a potential partner, your inquiries and feedback are important
                  to us as we work together to drive ESG trust and transparency.
                </p>
              </div>
            </div> */}
          </div>

          <div className='col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2'></div>
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
                  <img className='social-icon' src={pageicon1.src} alt='' />
                  <img className='social-icon' src={pageicon2.src} alt='' />
                  <img className='social-icon' src={pageicon3.src} alt='' />
                  <img className='social-icon' src={pageicon4.src} alt='' />
                </div>
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
