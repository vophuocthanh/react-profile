import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import navIcon1 from "../../assets/images/nav-icon2.svg";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://www.facebook.com/thanh.vophuoc.50">
              <img src={navIcon1} alt="" />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://github.com/vophuocthanh">
              <i class="bx bxl-github"></i>
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/v%C3%B5-ph%C6%B0%E1%BB%9Bc-th%E1%BA%A1nh-747813233/">
              <i class="bx bxl-linkedin"></i>
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://github.com/vophuocthanh">
              <i class="bx bxl-twitter"></i>
            </a>
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
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
