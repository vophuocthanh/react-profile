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
              <p className="text-xl font-medium uppercase">
                <span className="pr-3">HTML 5</span>
                <i class="bx bxl-html5 bx-tada bx-rotate-180"></i>
              </p>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-xl font-medium uppercase">
                <span className="pr-3">CSS 3</span>
                <i class="bx bxl-css3 bx-flashing"></i>
              </p>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-xl font-medium uppercase">
                <span className="pr-3">SASS/SCSS</span>
                <i class="bx bxl-sass bx-spin"></i>
              </p>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-xl font-medium uppercase">
                <span className="pr-3">Tailwind</span>
                <i class="bx bxl-tailwind-css bx-flashing"></i>
              </p>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-xl font-medium uppercase">
                <span className="pr-3">JavaScript</span>
                <i class="bx bxl-javascript bx-tada"></i>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="overflow-x-hidden">
              <p className="text-xl font-medium">
                <span className="pr-3">ReactJS</span>
                <i class="bx bxl-react bx-spin bx-rotate-90"></i>
              </p>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-xl font-medium uppercase">
                <span className="pr-3">Redux</span>
                <i class="bx bxl-redux bx-tada"></i>
              </p>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-xl font-medium uppercase">
                <span className="pr-3">TypeScript</span>
                <i class="bx bxl-typescript bx-tada"></i>
              </p>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-xl font-medium uppercase">
                <span className="pr-3">NextJS</span>
              </p>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-xl font-medium uppercase">
                <span className="pr-3">HTML 5</span>
                <i class="bx bxl-html5 bx-tada bx-rotate-180"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lgl:w-1/2">
        <div className="flex flex-col gap-4 py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">Database</h2>
        </div>
        <div className="flex flex-col gap-6">
          <div className="overflow-x-hidden">
            <p className="text-xl font-medium">
              <span className="pr-3">Firebase</span>
              <i class="bx bxl-firebase bx-tada"></i>
            </p>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-xl font-medium">
              <span className="pr-3">SQL</span>
              <i class="bx bxl-postgresql bx-tada"></i>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lgl:w-1/2">
        <div className="flex flex-col gap-4 py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">Tools</h2>
        </div>
        <div className="flex flex-col gap-6">
          <div className="overflow-x-hidden">
            <p className="text-xl font-medium">
              <span className="pr-3">Postman</span>
              <i class="bx bxl-firebase bx-tada"></i>
            </p>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-xl font-medium">
              <span className="pr-3">Visual Studio Code</span>
              <i class="bx bxl-visual-studio bx-tada"></i>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
