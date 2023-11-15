import Image from "next/image";
import React from "react";
import PageLogo from "../../../public/pageLogonav.png";
import Link from "next/link";

const Nav = () => {
  return (
    <div>
      <div className='full-navbar-div'>
        <div className='row'>
          <div className='col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
            <div className='nav-logo-img-div'>
              <img className='nav-logo-img' src={PageLogo.src} alt='' />
            </div>
          </div>

          <div className='col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
            <div>
              <div className='nav-items-div'>
                <Link href='/'>Home</Link>
                <Link href='/'>Brands</Link>
                <Link href='/'>About ESGLedger</Link>
                <Link href='/'>Explorer</Link>
                <Link href='/'>Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
