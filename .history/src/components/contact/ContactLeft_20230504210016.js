import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { avatar, avatar1, contactImg } from "../../assets/index";
import navIcon1 from "../../assets/images/nav-icon2.svg";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-[400px] object-cover rounded-lg mb-2"
        src={avatar}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Võ Phước Thạnh</h3>
        <p className="text-lg font-normal text-gray-400">Frontend Developer</p>
        <p className="text-base text-gray-400 tracking-wide">
          I am a Frontend Developer. I love creating websites with good user
          experience.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">0386725641</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">phuocthanh2k03@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://www.facebook.com/thanh.vophuoc.50">
              <img src={navIcon1} alt="" />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/v%C3%B5-ph%C6%B0%E1%BB%9Bc-th%E1%BA%A1nh-747813233/">
              <i class="bx bxl-linkedin"></i>
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://twitter.com/ThanhVP03">
              <i class="bx bxl-twitter"></i>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
