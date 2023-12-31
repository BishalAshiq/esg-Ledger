import React from "react";
import DashnavLogo from "../../../public/pageLogomd.png";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Link from "next/link";
import "./dashnav.css";

const dashNav = () => {
  const router = useRouter();
  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("refreshToken");

      localStorage.removeItem("userInfo");

      localStorage.removeItem("userId");
    }
    Cookies.remove("refreshToken");
    router.push("/");
  };
  return (
    <div>
      <div className=' row dashnav-div'>
        <div className='col-9 col-sm-6 col-lg-6 col-xl-6'>
          <Link href='/admin'>
            <div className='dashnav-img-div'>
              <img className='dashnav-img' src={DashnavLogo.src} alt='' />
            </div>
          </Link>
        </div>

        <div className='col-3 col-sm-6 col-lg-6 col-xl-6 logout-btn'>
          <svg
            onClick={handleLogout}
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='25'
            fill='white'
            class='bi bi-box-arrow-right'
            viewBox='0 0 16 16'>
            <path
              fill-rule='evenodd'
              d='M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z'
            />
            <path
              fill-rule='evenodd'
              d='M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default dashNav;
