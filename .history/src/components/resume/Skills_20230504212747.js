import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Developer Skill</h2>
        </div>
        <div className="flex gap-[50px]">
          <div className="flex flex-col gap-6">
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">HTML 5</p>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">CSS 3</p>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">SASS/SCSS</p>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">Tailwind</p>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">JavaScript</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">HTML 5</p>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">CSS 3</p>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">SASS/SCSS</p>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">Tailwind</p>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">JavaScript</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Developer</h2>
        </div>
        <div className="flex flex-col gap-6">
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Redux</p>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Firebase</p>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Typescript</p>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">Github</p>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">NextJS</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
