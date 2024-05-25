"use client";
import * as Tabs from "@radix-ui/react-tabs";
import MacWindowWrapper from "./lib/mac-window-wrapper";
import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { MdArrowRight, MdPlayArrow } from "react-icons/md";

const boomerang = `My Journey as a Founding Front-end Engineer at Boomerang

I was excited to join Boomerang as a founding front-end engineer, responsible for building innovative products from scratch.
As a leader, I guided a team of 6 engineers to achieve remarkable results.

Building Innovative Products

Together, we designed and developed three innovative products:

  1. BuyerAssist multi-tenant platform for B2B sales enablement 

  2. Relationship map/auto organization charts for CRM contacts using React-flow, helps visualize connections between people, making it easier to understand relationships

  3. Boomerang for tracking job changes  

Pioneering Innovation

I introduced new technologies to our team, ensuring our products stayed ahead of the curve.
I worked closely with our designer to create a consistent visual style across our products.

Crafting a Seamless User Experience

I built many reusable components, making it easier for our team to work efficiently.
By optimizing our code, I reduced page load times by 50%, making our products faster and more enjoyable to use.
I also created a responsive user interface that provides instant feedback, enhancing the overall user experience.

Simplifying Complex Data

Scaled complex data sets efficiently by using Redux-toolkit for data normalization, state management, API caching, and reducing code boilerplate by 40%.

Mentorship and Leadership

As a mentor and leader, I ensured our team followed best practices, enabling us to deliver features quickly.
I also made sure to stay up-to-date with the latest technologies, providing guidance to my team.

Collaboration and Talent Development

I worked closely with designers, product managers, and engineers to deliver a compelling user-facing product.
 I also conducted over 100 technical interviews, helping to build a talented team of engineers.

This journey has been an incredible experience, and I'm proud of the impact we've made at Boomerang. I'm excited to continue pushing the boundaries of innovation and excellence in my future endeavors.`;
const jllExperience = ` As a Full Stack Developer at JLL, the second-largest real estate company in the world, I had the opportunity to contribute to cutting-edge projects that transformed the industry.
My journey began as a Senior UI Developer for Global Property Solution, a research application designed to provide accurate and comprehensive commercial property data to real estate agents worldwide.

  One of my most notable achievements was resolving a complex state management issue, earning me a Certificate of Appreciation from JLL.
To tackle this challenge, I implemented a Redux-based, configuration-driven architecture for the search page, allowing us to onboard five additional entities seamlessly. This innovative solution resulted in a potential 60% reduction in lines of code and significantly faster feature delivery.

  In another project, I developed a GraphQL API leveraging Azure Cognitive Search and serverless functions.
To ensure the API's reliability, I wrote comprehensive unit tests, achieving an impressive 85% code coverage using Jest.
This API has become a cornerstone of JLL's technology stack, enabling faster and more efficient data processing.

  Throughout my tenure at JLL, I worked on various projects, switching between frontend and backend development, and collaborating with cross-functional teams to deliver high-quality solutions.
My experience at JLL has not only honed my technical skills but also deepened my understanding of the real estate industry and its evolving needs.`;
const hashedinExperience = ` As a Frontend Developer at Hashedin, I embarked on an exciting journey, starting with a Honeywell project that introduced me to the simplicity and elegance of React.
Coming from an Angular background, I was thrilled to discover the joys of React, initially with class-based components and later with functional components. The experience was transformative, and I was hooked!

  As I delved deeper into the React ecosystem, I explored Redux and various libraries, expanding my skill set and appreciation for the framework.
Collaborating with a global team, I learned the importance of simple, clean code, and the value of thoughtful naming conventions and functional programming principles.
 
  On the Honeywell project, I was responsible for developing and delivering a single-page React application with TypeScript, designed to manage a portfolio of connected IoT devices.
I successfully integrated GraphQL, Elastic Search, O-Data, and REST web services, creating a seamless user experience.
 
  To ensure a responsive and visually appealing design, I utilized InVision mock prototypes to craft layouts that would adapt effortlessly to various devices and screen sizes.
Furthermore, I wrote comprehensive unit test cases using Jest and Enzyme, ensuring the application's reliability and maintainability.
 
  My time at Hashedin was a period of rapid growth, both technically and professionally. I refined my skills, adopted best practices, and developed a deeper understanding of what it means to write clean, efficient, and scalable code.
This experience has had a lasting impact on my approach to software development, and I'm grateful for the opportunity to have been a part of the Hashedin team.`;
const mphasisExperience = ` Mphasis: Laying the Foundations of a Diverse Career

  As I embarked on my professional journey at Mphasis, I was presented with a unique opportunity to explore a wide range of programming languages, including Java, Python, and JavaScript.
This exposure not only broadened my technical horizons but also instilled in me a passion for continuous learning.

  As a member of the Internal Innovation Team, I donned multiple hats, taking on the roles of Full Stack Developer and Tester.
This dual responsibility allowed me to develop a holistic understanding of the software development lifecycle, from design to deployment.

  Worked on a variety of projects at Mphasis, including a single-page Angular 2+ full stack application, mobile application automation testing and web app workflow automation.
These projects showcased my ability to work on diverse technologies and deliver a cohesive solution.

  In another project, I developed ETL scripts using Express to import data from an Excel file to PostgreSQL, while also designing the database schema.
This experience honed my skills in data manipulation and database management.

  To enhance the user experience, I utilized Bootstrap 4 for responsive web design, ensuring that the application was accessible and visually appealing across various devices.
I also integrated Highcharts for data visualization and Material UI component library to create an engaging and interactive interface.

  Throughout my tenure at Mphasis, I actively participated in Agile events, contributing to design discussions as a domain expert, attending daily Scrum calls, and collaborating on sprint planning.
This experience instilled in me the importance of teamwork, adaptability, and iterative development.

  My time at Mphasis was a formative period in my career, laying the foundations for my future growth as a versatile and adaptable software professional.`;

const companyList = [
  {
    name: "Boomerang",
    duration: "march 2021 – to present",
    details: boomerang,
  },
  {
    name: "JLL",
    duration: "november 2019 – to february 2021",
    details: jllExperience,
  },
  {
    name: "Hashedin",
    duration: "february 2019 – to november 2019",
    details: hashedinExperience,
  },
  {
    name: "Mphasis",
    duration: "april 2015 – to february 2019",
    details: mphasisExperience,
  },
];

function WorkExperience() {
  const [selectedTab, setSelectedTab] = useState("Boomerang");

  return (
    <div className="" id="experience">
      <h1 className="black-chip">Work Experience</h1>
      <section className="my-20 rounded-lg overflow-auto">
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
                        "text-[12px] mt-1 capitalize transition-all"
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
            {companyList.map(({ name: company, details }, index) => (
              <Tabs.Content asChild key={company + index} value={company}>
                <>
                  <p
                    className="text-slate-600 text-sm my-2 whitespace-pre-wrap"
                    key={details}
                  >
                    {details}
                  </p>
                </>
              </Tabs.Content>
            ))}
          </section>
        </Tabs.Root>
      </section>
    </div>
  );
}

export default WorkExperience;
