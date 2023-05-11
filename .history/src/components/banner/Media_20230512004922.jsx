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
            <a
              href="https://www.facebook.com/thanh.vophuoc.50"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={navIcon1} alt="" />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://github.com/vophuocthanh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://www.linkedin.com/in/v%C3%B5-ph%C6%B0%E1%BB%9Bc-th%E1%BA%A1nh-747813233/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://twitter.com/ThanhVP03"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-twitter"></i>
            </a>
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
        </div>
      </div>
    </div>
  );
};

export default Media;
