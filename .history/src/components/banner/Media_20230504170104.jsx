import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import navIcon1 from "../../assets/images/nav-icon2.svg";
const Media = () => {
  return (
    <div className="flex flex-col justify-between gap-6 xl:flex-row lgl:gap-0">
      <div>
        <h2 className="mb-4 text-base uppercase font-titleFont">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://www.facebook.com/thanh.vophuoc.50">
              <img src={navIcon1} alt="" />
            </a>
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
      <div>
        <h2 className="mb-4 text-base uppercase font-titleFont">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiNextdotjs />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiFigma />
          </span>
          <span className="bannerIcon">
            <i className="bx bxl-github"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
