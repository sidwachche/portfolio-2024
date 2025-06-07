"use client";

import clsx from "clsx";
// Primary imports from react-icons/ri
import {
  RiReactjsFill,
  RiNextjsFill,
  RiJavascriptFill,
  RiHtml5Fill,
  RiCss3Fill,
  RiNodejsFill,
  RiGitBranchFill,
} from "react-icons/ri";

// Fallback imports from other icon sets
import {
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiRadixui,
  SiGraphql,
  SiSass,
  SiExpress,
  SiAngular,
  SiJquery,
  SiGatsby,
  SiWebpack,
  SiFramer,
  SiStorybook,
  SiMui,
  SiApollographql,
  SiAmazonaws,
  SiMicrosoftazure,
  SiJest,
  SiLinux,
  SiGit,
  SiEslint,
} from "react-icons/si";

import {
  TbDatabase,
  TbTestPipe,
  TbDeviceDesktop,
  TbBrandFramerMotion,
  TbLock,
  TbTable,
  TbTextResize,
} from "react-icons/tb";

import { MdOutlineSpeed, MdOutlineAnalytics } from "react-icons/md";
import { BiData } from "react-icons/bi";
import { RxComponent1, RxComponent2 } from "react-icons/rx";

const techIcons: Record<string, React.ComponentType<any>> = {
  // Primary Tech Stack
  "react 18": RiReactjsFill,
  "next js 14": RiNextjsFill,
  typescript: SiTypescript,
  redux: SiRedux,
  "tailwind css": SiTailwindcss,
  "Radix UI": SiRadixui,
  "RTK Query": SiRedux,
  Graphql: SiGraphql,
  "HTML 5": RiHtml5Fill,
  "CSS 3": RiCss3Fill,

  // Frontend Skills
  SCSS: SiSass,
  Flexbox: RiCss3Fill,
  "CSS Grid": RiCss3Fill,
  "Responsive Web design": TbDeviceDesktop,
  "Performance/Page load Optimization": MdOutlineSpeed,
  "Web Vitals": MdOutlineAnalytics,
  "Data visualization": BiData,
  Animations: TbBrandFramerMotion,
  "ES Lint": SiEslint,

  // Frameworks
  NodeJS: RiNodejsFill,
  "Express JS": SiExpress,
  "Angular 2+": SiAngular,
  jQuery: SiJquery,
  Gatsby: SiGatsby,

  // Libraries & Tooling
  "webpack 5": SiWebpack,
  "Framer Motion": SiFramer,
  "next auth": TbLock,
  Storybook: SiStorybook,
  "tan stack table": TbTable,
  "material ui": SiMui,
  "lexical rich text editor": TbTextResize,
  "apollo graphql": SiApollographql,

  // Cloud
  AWS: SiAmazonaws,
  Azure: SiMicrosoftazure,

  // Other
  keyclok: TbLock,
  Jest: SiJest,
  SQL: TbDatabase,
  Linux: SiLinux,
  Git: SiGit,
  "Unit testing": TbTestPipe,
};

const primaryTechStack = [
  "react 18",
  "next js 14",
  "typescript",
  "redux",
  "tailwind css",
  "Radix UI",
  "RTK Query",
  "Graphql",
  "HTML 5",
  "CSS 3",
];

const secondaryTechStack = [
  "keyclok",
  "Jest",
  "SQL",
  "Linux",
  "Git",
  "Unit testing",
];

const frontedSkill = [
  "SCSS",
  "Flexbox",
  "CSS Grid",
  "ES Lint",
  "Web Vitals",
  "Animations",
  "Data visualization",
  "Responsive Web design",
  "Performance/Page load Optimization",
];

const frameworks = ["NodeJS", "Express JS", "Angular 2+", "jQuery", "Gatsby"];

const tooling = [
  "webpack 5",
  "Framer Motion",
  "next auth",
  "Storybook",
  "tan stack table",
  "material ui",
  "lexical rich text editor",
  "apollo graphql",
];

const techStack: Record<string, string[]> = {
  "Primary Tech Stack": primaryTechStack,
  "Libraries & Tooling": tooling,
  Other: secondaryTechStack,
  Frameworks: frameworks,
  Cloud: ["AWS", "Azure"],
  "Frontend Skills": frontedSkill,
};

function TechStackWithIcons() {
  return (
    <section className="mb-20 mt-10 rounded-lg overflow-auto">
      {/* Hidden SVG for gradient definitions */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="6.68%" stopColor="rgba(99, 102, 241, 1)" />
            <stop offset="82.69%" stopColor="rgba(244, 114, 182, 1)" />
          </linearGradient>
        </defs>
      </svg>
      {/* Sectional Bento Grid with CSS Columns */}
      <div className="p-2 md:p-4 columns-1 lg:columns-2 gap-6">
        {Object.keys(techStack).map((key) => (
          <div
            key={key}
            className="break-inside-avoid-column bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-6 border"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-slate-600 border-b border-gray-200 pb-2">
                {key}
              </h3>
              <div className="flex flex-wrap gap-3">
                {techStack[key].map((tech) => {
                  const Icon = techIcons[tech] || RxComponent1;
                  return (
                    <div
                      key={tech}
                      className={clsx(
                        "group flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200",
                        key === "Primary Tech Stack"
                          ? "bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 border border-indigo-200"
                          : "bg-gray-50 hover:bg-gray-100 border border-gray-200"
                      )}
                    >
                      <span className="transition-transform duration-200 group-hover:scale-110">
                        <Icon
                          className="text-2xl stroke-purple-300"
                          style={{
                            fill: "url(#iconGradient)",
                          }}
                        />
                      </span>
                      <p className="text-sm text-slate-700 capitalize">
                        {tech}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStackWithIcons;
