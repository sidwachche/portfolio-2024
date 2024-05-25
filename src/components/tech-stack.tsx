"use client";

import clsx from "clsx";

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
  "TDD",
];

const frontedSkill = [
  "SCSS",
  "Flexbox",
  "CSS Grid",
  "Responsive Web design",
  "UX",
  "Performance/Page load Optimization",
  "Web Vitals",
  "Data visualization",
  "Animations",
  "ES Lint",
];

const frameworks = [
  "nest js",
  "NodeJS",
  "Express JS",
  "Angular 2+",
  "jQuery",
  "Gatsby",
];

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
  "Frontend Skills": frontedSkill,
  Frameworks: frameworks,
  "Libraries & Tooling": tooling,
  Cloud: ["AWS", "Azure"],
  Other: secondaryTechStack,
};

function TechStack() {
  return (
    <div className="" id="experience">
      <h1 className="black-chip">Tech Stack</h1>
      <section className="my-20 rounded-lg overflow-auto">
        {Object.keys(techStack).map((key) => (
          <section key={key} className="my-10">
            <p className="text-xl px-2 border-0 border-b border-dashed border-black inline-block my-6">
              {key}
            </p>
            <section className="flex gap-4 flex-wrap lg:w-2/3">
              {techStack[key].map((tech) => (
                <p
                  key={tech}
                  className={clsx(
                    key === "Primary Tech Stack"
                      ? "primary-chip"
                      : "secondary-chip"
                  )}
                >
                  {tech}
                </p>
              ))}
            </section>
          </section>
        ))}
        {/* <p className="text-lg border-0 border-b border-black inline-block mb-4">
          Primary Tech Stack
        </p>
        <section className="flex gap-4 flex-wrap">
          {primaryTechStack.map((tech) => (
            <p key={tech} className="primary-chip">
              {tech}
            </p>
          ))}
        </section>
        <p className="text-lg border-0 border-b border-black inline-block mb-4">
          Frontend Skills
        </p>
        <section className="flex gap-4 flex-wrap">
          {secondaryTechStack.map((tech) => (
            <p key={tech} className="secondary-chip">
              {tech}
            </p>
          ))}
        </section> */}
      </section>
    </div>
  );
}

export default TechStack;
