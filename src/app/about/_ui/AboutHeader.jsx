import React from "react";
import Image from "next/image";
import logo from "../_assets/About-Logo.svg";
export default function AboutHeader({header}) {
  return (
    <div>
      {header === "" && (
        <div className="About__Header_Logo">
          <h2 className="About__Header about">About</h2>
          <Image className="img" src={logo} alt="Logo" />
        </div>
      )}
      <h3 className="About__Header">{header}</h3>
    </div>
  );
}
