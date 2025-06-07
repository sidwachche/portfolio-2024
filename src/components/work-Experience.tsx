"use client";
import clsx from "clsx";
import mphLogo from "../../public/images/mphasis-logo.png";
import BoomerangExp from "./markdowns/boomerang-exp.mdx";
import hashedinExp from "./markdowns/hashedin-exp.mdx";
import jllExp from "./markdowns/jll-exp.mdx";
import mphasisExp from "./markdowns/mphasis.mdx";
import Image from "next/image";
import jllLogo from "../../public/images/JLL_logo.png";
import boomLogo from "../../public/images/boomerang-logo.svg";
import hashLogo from "../../public/images/hashedin-logo.png";
import { motion } from "framer-motion";
import ExperiencePopover from "./popover";

const companyList = [
  {
    name: "Boomerang",
    duration: " 03/ 2021 – Present",
    MdxComponent: BoomerangExp,
    logo: boomLogo,
    designation: "Senior Frontend Engineer",
  },
  {
    name: "JLL",
    duration: "11/ 2019 – 02/ 2021",
    MdxComponent: jllExp,
    logo: jllLogo,
    designation: "Senior Frontend Engineer",
  },
  {
    name: "Hashedin",
    duration: "02/ 2019 – 11/ 2019",
    MdxComponent: hashedinExp,
    logo: hashLogo,
    designation: "Senior Software Engineer",
  },
  {
    name: "Mphasis",
    duration: "04/ 2015 – 02/ 2019",
    MdxComponent: mphasisExp,
    logo: mphLogo,
    designation: "Delivery Software Associate",
  },
];

function WorkExperience() {
  return (
    <div className="md:mb-40" id="experience">
      <div className="flex justify-center mb-14">
        <h1 className="black-chip " id="work">
          Work Experience
        </h1>
      </div>
      <section className="mb-20 rounded-lg">
        <section className="flex flex-col items-center md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-16 lg:gap-x-40">
          {companyList.map(
            ({ name, duration, logo, designation, MdxComponent }, index) => (
              <ExperiencePopover name={name} MdxComponent={MdxComponent}>
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 100,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 1,
                    },
                  }}
                  whileHover={{
                    scale: 1.02,
                    transition: {
                      duration: 0.3,
                      ease: "easeOut",
                    },
                  }}
                  className={clsx(
                    "group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300",
                    "border w-72 h-80 mb-5 rounded-2xl p-4 flex flex-col justify-between",
                    index % 2 !== 0
                      ? "relative md:top-24 md:mt-16"
                      : "justify-self-end"
                  )}
                >
                  <div
                    className={clsx(
                      index % 2 !== 0
                        ? "bg-primary-gradient "
                        : "bg-primary-dark-gradient",
                      "w-full h-40 rounded-2xl flex items-center shadow-xl justify-center mb-6"
                    )}
                  >
                    <Image
                      width={200}
                      height={100}
                      src={logo}
                      alt="company logo"
                      placeholder="blur"
                      loading="lazy"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h5 className="text-xl font-semibold text-primary-gradient">
                        {name}
                      </h5>
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <p className="hidden group-hover:block">
                          Click for details
                        </p>
                        <svg
                          className="size-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-base text-gray-600 group-hover:text-gray-500 transition-colors">
                      {designation}
                    </p>
                    <p className="text-sm text-gray-500 font-light group-hover:text-gray-400 transition-colors">
                      {duration}
                    </p>
                  </div>
                </motion.div>
              </ExperiencePopover>
            )
          )}
        </section>
      </section>
    </div>
  );
}

export default WorkExperience;
