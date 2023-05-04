import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex flex-col w-full gap-10 lgl:flex-row lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="flex flex-col gap-4 py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">Developer Skill</h2>
        </div>
        <div className="flex gap-[100px]">
          <div className="flex flex-col gap-6">
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">HTML 5</p>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">CSS 3</p>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">SASS/SCSS</p>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">Tailwind</p>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">JavaScript</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">HTML 5</p>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">CSS 3</p>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">SASS/SCSS</p>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">Tailwind</p>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">JavaScript</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lgl:w-1/2">
        <div className="flex flex-col gap-4 py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">Developer</h2>
        </div>
        <div className="flex flex-col gap-6">
          <div className="overflow-x-hidden">
            <p className="text-xl font-medium ">
              ReactJS
              <i class="bx bxl-react bx-spin bx-rotate-90"></i>
            </p>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm font-medium uppercase">Firebase</p>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm font-medium uppercase">Typescript</p>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm font-medium uppercase">Github</p>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm font-medium uppercase">NextJS</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
