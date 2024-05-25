"use client";
import * as Tabs from "@radix-ui/react-tabs";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";
import BoomerangExp from "./markdowns/boomerang-exp.mdx";
import jllExp from "./markdowns/jll-exp.mdx";
import hashedinExp from "./markdowns/hashedin-exp.mdx";
import mphasisExp from "./markdowns/mphasis.mdx";

const companyList = [
  {
    name: "Boomerang",
    duration: "march 2021 – to present",
    MdxComponent: BoomerangExp,
  },
  {
    name: "JLL",
    duration: "november 2019 – to february 2021",
    MdxComponent: jllExp,
  },
  {
    name: "Hashedin",
    duration: "february 2019 – to november 2019",
    MdxComponent: hashedinExp,
  },
  {
    name: "Mphasis",
    duration: "april 2015 – to february 2019",
    MdxComponent: mphasisExp,
  },
];

function WorkExperience() {
  const [selectedTab, setSelectedTab] = useState("Boomerang");

  return (
    <div className="" id="experience">
      <h1 className="black-chip">Work Experience</h1>
      <section className="mb-20 mt-10 rounded-lg overflow-auto">
        <Tabs.Root
          className="flex lg:flex-row flex-col gap-10 py-5"
          value={selectedTab}
          onValueChange={setSelectedTab}
        >
          <section className="border-0 lg:border-l lg:border-t-0 pl-2 pt-2">
            <Tabs.List
              className="flex lg:flex-col flex-row lg:gap-10 gap-2 rounded-lg lg:flex-nowrap flex-wrap"
              aria-label="companies"
            >
              {companyList.map(({ name, duration }) => (
                <Tabs.Trigger
                  key={name}
                  className="cursor-pointer h-full"
                  value={name}
                  asChild
                >
                  <div
                    className={clsx(
                      "text-start flex flex-col justify-center rounded-lg py-3 lg:px-5 px-2 relative lg:w-72 lg:h-24 h-full"
                    )}
                  >
                    {name === selectedTab ? (
                      <motion.div
                        style={{ opacity: 0.2 }}
                        // bg-gradient-to-r from-indigo-500 to-purple-600
                        className="h-full work-handle absolute rounded-md top-0 left-0 opacity-10 bg-[#FFD7BE]   w-full"
                        layoutId="experience"
                      />
                    ) : null}
                    <h4
                      className={clsx(
                        "lg:text-3xl text-lg leading-tight font-bold transition-all",
                        name === selectedTab
                          ? "text-primary-gradient"
                          : "text-slate-400"
                      )}
                    >
                      {name}
                    </h4>
                    <p
                      className={clsx(
                        name === selectedTab
                          ? "text-slate-500"
                          : "text-slate-300",
                        "text-[12px] mt-1 capitalize transition-all hidden md:flex"
                      )}
                    >
                      {duration}
                    </p>
                  </div>
                </Tabs.Trigger>
              ))}
            </Tabs.List>
          </section>
          <section className="lg:pl-20 ">
            {companyList.map(({ name: company, MdxComponent }, index) => (
              <Tabs.Content asChild key={company + index} value={company}>
                <section className="work-exp-prose">
                  <MdxComponent />
                </section>
              </Tabs.Content>
            ))}
          </section>
        </Tabs.Root>
      </section>
    </div>
  );
}

export default WorkExperience;
