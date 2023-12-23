"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import PageLogo from "../../../public/pageLogonavas.png";
import PageLogomob from "../../../public/pageLogomd.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import companyLogo from "../../../public/pageLogonavas.png";
import companyLogo1 from "../../../public/pageLogomd.png";

const Nav = () => {
  const [navbarColor, setNavbarColor] = useState(null);
  const [navbarTextColor, setNavbarTextColor] = useState(null);
  const [dropdownColor, setDropdownColor] = useState(null);
  const [buttonColor, setButtonColor] = useState(null);
  const [logoColor, setLogoColor] = useState("black");
  const [logoUrl, setLogoUrl] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (location.pathname === "/landingPage") {
      setLogoUrl(companyLogo);
    } else if (location.pathname === "/") {
      setLogoUrl(companyLogo1);
    } else {
      setLogoUrl(companyLogo);
    }
  }, [location]);

  useEffect(() => {
    switch (location.pathname) {
      case "/landingPage":
        setNavbarColor("white");
        setNavbarTextColor("#404040");
        setDropdownColor("");
        setButtonColor("#066F69");
        break;

      case "/google_privacy_Policies":
        setNavbarColor("white");
        setNavbarTextColor("#404040");
        setDropdownColor("#404040");
        setButtonColor("#1e397a");
        break;
      case "/RequestQuotation":
        setNavbarColor("white");
        setNavbarTextColor("#404040");
        setDropdownColor("#404040");
        setButtonColor("#1e397a");
        break;
      case "/RequestDemo":
        setNavbarColor("white");
        setNavbarTextColor("#404040");
        setDropdownColor("#404040");
        setButtonColor("#1e397a");
        break;
    }
  }, [location.pathname]);

  return (
    <div>
      <div className='full-navbar-div'>
        <div className='row web-nav'>
          <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'></div>
          <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
            <div className='nav-logo-img-div'>
              <Link href='/'>
                <img className='nav-logo-img' src={PageLogo.src} alt='' />
              </Link>
            </div>
          </div>

          <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 '>
            <div>
              <div className='nav-items-div'>
                <Link href='/'>Home</Link>
                <Link className='contact-nav-a' href='/brands/login'>
                  {" "}
                  <p>Brands</p>{" "}
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='10'
                      height='10'
                      fill='currentColor'
                      class='bi bi-chevron-down'
                      viewBox='0 0 16 16'>
                      <path
                        fill-rule='evenodd'
                        d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
                      />
                    </svg>
                  </span>
                </Link>
                <Link href='/about'>About ESGLedger</Link>
                <Link
                  className='contact-nav-a'
                  href='https://www.onechainscan.io/'
                  target='_blank'>
                  <p>Explorer</p>{" "}
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='10'
                      height='10'
                      fill='currentColor'
                      class='bi bi-chevron-down'
                      viewBox='0 0 16 16'>
                      <path
                        fill-rule='evenodd'
                        d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
                      />
                    </svg>
                  </span>
                </Link>
                <Link className='contact-nav-a' href='/contactUs'>
                  <p>Contact</p>{" "}
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='10'
                      height='10'
                      fill='currentColor'
                      class='bi bi-chevron-down'
                      viewBox='0 0 16 16'>
                      <path
                        fill-rule='evenodd'
                        d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'></div>
        </div>
      </div>
      <div className='mobile-nav-div'>
        <nav class='navbar navbar-expand-lg bg-body-tertiary'>
          <div class='container-fluid'>
            <button
              class='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarTogglerDemo01'
              aria-controls='navbarTogglerDemo01'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <span class='navbar-toggler-icon'></span>
            </button>
            <div class='collapse navbar-collapse' id='navbarTogglerDemo01'>
              <div className='nav-mob-logo-img-div'>
                <Link href='/landingPage'>
                  <img className='nav-mob-logo-img' src={logoUrl.src} alt='' />
                </Link>
              </div>
              <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
                <div className='nav-items-div-mob'>
                  <Link className='contact-nav-a-mov' href='#'>
                    <p> Home</p>
                  </Link>
                  <Link className='contact-nav-a-mov' href='#'>
                    {" "}
                    <p>Brands</p>{" "}
                    <span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='10'
                        height='10'
                        fill='currentColor'
                        class='bi bi-chevron-down'
                        viewBox='0 0 16 16'>
                        <path
                          fill-rule='evenodd'
                          d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
                        />
                      </svg>
                    </span>
                  </Link>
                  <Link className='contact-nav-a-mov' href='#'>
                    <p> About ESGLedger</p>
                  </Link>
                  <Link className='contact-nav-a-mov' href='#'>
                    <p>Explorer</p>{" "}
                    <span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='10'
                        height='10'
                        fill='currentColor'
                        class='bi bi-chevron-down'
                        viewBox='0 0 16 16'>
                        <path
                          fill-rule='evenodd'
                          d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
                        />
                      </svg>
                    </span>
                  </Link>
                  <Link className='contact-nav-a-mov' href='#'>
                    <p>Contact</p>{" "}
                    <span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='10'
                        height='10'
                        fill='currentColor'
                        class='bi bi-chevron-down'
                        viewBox='0 0 16 16'>
                        <path
                          fill-rule='evenodd'
                          d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </ul>
              {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
            </div>
          </div>
        </nav>
        {/* <nav
          class='navbar navbar-expand-lg mob-nav fixed-top'
          style={{ backgroundColor: navbarColor }}>
          <div class=''>
            <div className='nav-mob-logo-img-div'>
              <Link href='/landingPage'>
                <img className='nav-mob-logo-img' src={logoUrl.src} alt='' />
              </Link>
              <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarTogglerDemo01'
                aria-controls='navbarTogglerDemo01'
                aria-expanded='false'
                aria-label='Toggle navigation'>
                <span className=''>
                  {" "}
                  <svg
                    style={{ backgroundColor: buttonColor }}
                    xmlns='http://www.w3.org/2000/svg'
                    width='26'
                    height='26'
                    fill='white'
                    className='bi bi-justify'
                    viewBox='0 0 16 16'>
                    <path
                      fill-rule='evenodd'
                      d='M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5'
                    />
                  </svg>
                </span>
              </button>
            </div>
            <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
         
            </div>
                 <div className='nav-items-div-mob'>
                <Link className='contact-nav-a-mov' href='#'>
                  <p> Home</p>
                </Link>
                <Link className='contact-nav-a-mov' href='#'>
                  {" "}
                  <p>Brands</p>{" "}
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='10'
                      height='10'
                      fill='currentColor'
                      class='bi bi-chevron-down'
                      viewBox='0 0 16 16'>
                      <path
                        fill-rule='evenodd'
                        d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
                      />
                    </svg>
                  </span>
                </Link>
                <Link className='contact-nav-a-mov' href='#'>
                  <p> About ESGLedger</p>
                </Link>
                <Link className='contact-nav-a-mov' href='#'>
                  <p>Explorer</p>{" "}
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='10'
                      height='10'
                      fill='currentColor'
                      class='bi bi-chevron-down'
                      viewBox='0 0 16 16'>
                      <path
                        fill-rule='evenodd'
                        d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
                      />
                    </svg>
                  </span>
                </Link>
                <Link className='contact-nav-a-mov' href='#'>
                  <p>Contact</p>{" "}
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='10'
                      height='10'
                      fill='currentColor'
                      class='bi bi-chevron-down'
                      viewBox='0 0 16 16'>
                      <path
                        fill-rule='evenodd'
                        d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
                      />
                    </svg>
                  </span>
                </Link>
              </div>
          </div>
        </nav> */}
      </div>
      <script
        src='https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js'
        integrity='sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r'
        crossorigin='anonymous'></script>
      <script
        src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js'
        integrity='sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+'
        crossorigin='anonymous'></script>
    </div>
  );
};

export default Nav;
