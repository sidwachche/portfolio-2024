"use client";

import Image from "next/image";
import orgChartImage from "../../public/images/org-chart-overview.jpeg";
import MSPImage from "../../public/images/msp-plan-details.png";
import BoomerangImage from "../../public/images/bm-dashboard.png";
import CalculatorImage from "../../public/images/Calc.webp";
import DrumImage from "../../public/images/drum.webp";
import MarkDownImage from "../../public/images/markdown.webp";
import PomoImage from "../../public/images/pomo.webp";
import QuoteImage from "../../public/images/quote.webp";
import RandomGenImage from "../../public/images/random.webp";
// import Image from "../../public/images/";
// import Image from "../../public/images/";
// import Image from "../../public/images/";
import MacWindowWrapper from "./lib/mac-window-wrapper";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/router";

export const PROJECT_SECTION_CLASSES =
  "flex-col gap-8 flex lg:flex-row justify-between my-24";

const projectList = [
  {
    title: "Org Charts",
    description: "Easy Org Chart creation with 1 click.",
    imgSrc: orgChartImage,
    link: "/org-charts",
  },
  {
    title: "Boomerang",
    description: "Champion/Job tracking platform",
    imgSrc: BoomerangImage,
    link: "/boomerang",
  },
  {
    title: "Buyerassist",
    description: "It's platform like Jira, for buyer engagement",
    imgSrc: MSPImage,
    link: "/buyerassist",
  },
];

const baseUrl = "https://sidwachche.netlify.app/";

const freeCodeProjectList = [
  { src: CalculatorImage, name: "Calculator", link: "Calculator" },
  { src: DrumImage, name: "Drum Machine", link: "drum-machine" },
  { src: PomoImage, name: "Pomodoro Timer", link: "Pomodoro" },
  { src: MarkDownImage, name: "Markdown Previewer", link: "markdown-preview" },
  { src: RandomGenImage, name: "Quote Generator", link: "RandomQuote" },
];

function WorkShowcase() {
  return (
    <div className="">
      <div className="flex justify-center mb-14">
        <h1 className="black-chip " id="work">
          Selected Work
        </h1>
      </div>
      {projectList.map(({ title, description, imgSrc, link }) => (
        <section
          key={description}
          className="group border p-1 rounded-[20px] xl:mx-32 my-10 shadow-md relative shadow-primary-gradient transition-all"
        >
          <Link className="" href={link} target="_blank">
            <div className="px-8 py-9 border rounded-2xl overflow-hidden bg-white shadow-xl">
              <div className="flex flex-col gap-2 mb-10 transition-all duration-500">
                <div className="flex justify-between items-center">
                  <h3 className="text-4xl text-primary-gradient tracking-tight font-bold pr-2">
                    {title}
                  </h3>
                  <BsArrowRight className="text-gray-500 text-2xl group-hover:translate-x-2 duration-500" />
                </div>
                <div className="flex gap-3">
                  <h4 className="text-lg font-semibold text-gray-600 ">
                    Boomerang
                  </h4>
                  <h5 className="text-lg text-gray-500 ">{description}</h5>
                </div>
              </div>

              <div className="flex justify-center w-full">
                <MacWindowWrapper tagName="org-charts">
                  <Image
                    width={1050}
                    height={650}
                    src={imgSrc}
                    alt="org chart overview"
                    className="rounded-b-lg"
                    placeholder="blur"
                    loading="lazy"
                  />
                </MacWindowWrapper>
              </div>
            </div>
          </Link>
        </section>
      ))}
      {/* {projectList.map(({ title, description, imgSrc, link }) => (
        <section key={description} className="work-section-container">
          <div className="flex flex-col gap-2 max-w-[300px]">
            <h3 className="text-5xl text-primary-gradient tracking-tight font-bold pr-2">
              {title}
            </h3>
            <h4 className="text-lg text-gray-600 ">{description}</h4>
            <Link
              className="text-md text-gray-500 my-5 underline decoration-dotted cursor-pointer"
              href={link}
              target="_blank"
            >
              View more details
            </Link>
          </div>
          <Link className="" href={link} target="_blank">
            <MacWindowWrapper tagName="org-charts">
              <Image
                width={850}
                height={500}
                src={imgSrc}
                alt="org chart overview"
                className="rounded-b-lg transition-all "
                placeholder="blur"
                loading="lazy"
              />
            </MacWindowWrapper>
          </Link>
        </section>
      ))} */}
      <section className="group border p-1 rounded-[20px] xl:mx-32 my-10 shadow-md relative shadow-primary-gradient transition-all">
        <div className="px-8 py-9 border rounded-2xl overflow-hidden bg-white shadow-xl">
          <div className="flex flex-col gap-2 mb-10 transition-all duration-500">
            <div className="flex justify-between items-center">
              <h3 className="text-4xl text-primary-gradient tracking-tight font-bold pr-2">
                React Projects
              </h3>
            </div>
            <div className="flex flex-col gap-3 ">
              <h4 className="text-lg font-semibold text-gray-600 ">
                These are freeCodeCamp react certification projects
              </h4>
              <h4 className="text-sm text-gray-500">
                click on a tile to checkout live projects and code
              </h4>
            </div>
          </div>
          <MacWindowWrapper disableTapAnimation tagName="org-charts">
            <section className="grid gap-4 lg:gap-10 grid-cols-3 md:grid-cols-3 lg:grid-cols-5 p-8">
              {freeCodeProjectList.map(({ link, name, src }) => (
                <Link href={baseUrl + link} key={name} target="_blank">
                  <motion.div
                    whileTap={{ scale: 0.85 }}
                    className="space-y-2 w-full "
                  >
                    <Image
                      width={200}
                      height={200}
                      className="rounded-lg border-2 transition-all min-w-16 md:w-full"
                      src={src}
                      alt={`name app image`}
                      placeholder="blur"
                      loading="lazy"
                      quality={80}
                    />
                    <p className="text-md text-gray-500 py-1 truncate underline decoration-dotted cursor-pointer">
                      {name}
                    </p>
                  </motion.div>
                </Link>
              ))}
            </section>
          </MacWindowWrapper>
        </div>
      </section>
    </div>
  );
}

export default WorkShowcase;
