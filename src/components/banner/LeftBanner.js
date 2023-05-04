import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Software Engineer.", "Frontend Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-col w-full gap-20 lgl:w-1/2">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal ">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="capitalize text-designColor">Võ Phước Thạnh</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base leading-6 tracking-wide font-bodyFont">
          I am a Frontend Developer. I love programming, especially creating
          websites with good user interfaces, to meet the needs of users.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
