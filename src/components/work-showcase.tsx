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
      <h1 className="black-chip" id="work">
        Selected Work
      </h1>

      {projectList.map(({ title, description, imgSrc, link }) => (
        <section key={description} className="work-section-container">
          <div className="flex flex-col gap-2 max-w-[300px]">
            <h3 className="text-5xl text-primary-gradient tracking-tight font-bold pr-2">
              {title}
            </h3>
            <h2 className="text-lg text-gray-600 ">{description}</h2>
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
      ))}
      <section className="work-section-container">
        <div className="flex flex-col max-w-[300px]">
          <h3 className="text-5xl text-primary-gradient tracking-tight font-bold pr-2">
            React Projects
          </h3>
          <p className="text-md text-gray-600 my-2">
            These are freeCodeCamp react certification projects
          </p>
          <h2 className="text-sm text-gray-500 mt-6">
            click on a tile to checkout live projects and code
          </h2>
        </div>
        <section className="max-w-[850px] h-auto">
          <MacWindowWrapper disableTapAnimation tagName="org-charts">
            <section className="flex gap-5 flex-wrap p-4">
              {freeCodeProjectList.map(({ link, name, src }) => (
                <Link
                  href={baseUrl + link}
                  key={name}
                  target="_blank"
                  className=""
                >
                  <Image
                    width={250}
                    height={200}
                    className="rounded-lg border hover:scale-105 transition-all "
                    src={src}
                    alt={`name app image`}
                    placeholder="blur"
                    loading="lazy"
                    quality={80}
                  />
                  <motion.p
                    whileTap={{ scale: 0.85 }}
                    className="text-md text-gray-500 py-1 text-center underline decoration-dotted cursor-pointer"
                  >
                    {name}
                  </motion.p>
                </Link>
              ))}
            </section>
          </MacWindowWrapper>
        </section>
      </section>
    </div>
  );
}

export default WorkShowcase;
