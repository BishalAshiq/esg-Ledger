import React from "react";
import logo from "../_assets/Footer-logo.svg";
import social from "../_assets/social.svg";
import Image from "next/image";
import "../_assets/about-footer.css";
import Link from "next/link";

export default function AboutFooter() {
  return (
    <div className="footer__wrapper">
      <div className="footer__content__wrapper">
        <div className="footer__content">
          <div className="logo__social">
            <div className="special__mobile">
              <p>
                For inquiries or more information please contact:
                enquiries@esgledger.co
              </p>
            </div>
            <div className="logo">
              <Image src={logo} alt="logo" />
              <p>
                For inquiries or more information please contact:
                enquiries@esgledger.co
              </p>
            </div>
            <div className="social">
              <Image src={social} alt="Social" />
              <p>Join the Community</p>
            </div>
          </div>

          <div className="footer__bottom">
            <p>© 2023 OneChain Ltd.</p>

            <div className="link__area">
              <Link className="link" href={"#"}>
                Privacy Policy
              </Link>
              <Link className="link" href={"#"}>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
