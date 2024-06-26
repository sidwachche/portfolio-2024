"use client";

import ContactRelImage from "../../../public/images/bm-contact-relationship.png";
import DashboardImage from "../../../public/images/bm-dashboard.png";
import CRMSettingImage from "../../../public/images/bm-integration.png";
import outreachImage from "../../../public/images/outreach-integration.png";
import PageTransitionLayout from "../../components/lib/PageTransitionLayout";
import ProjectFeature from "../../components/lib/project-feature";
import ProjectTechStack from "../../components/lib/project-tech-stack";

const techStack = [
  "react 18",
  "next js 14",
  "typescript",
  "redux",
  "tailwind css",
  "Radix UI",
  "RTK Query",
  "Graphql",
  "next auth",
  "nest js",
  "tan stack table",
];

const dashboardDescription = [
  {
    title: "Overview",
    content: [
      "The Boomerang Dashboard is a centralized platform that displays current cycle leads generated by tracking job changes.",
      "The dashboard enables users to update leads and seamlessly push them to respective CRM systems.",
    ],
  },
  {
    title: "Benefits",
    content: [
      "Streamlined lead management: Easily track, update, and push leads to CRM systems from a single platform.",
      "Improved productivity: Quickly find and manage leads using search, sorting, and filtering features.",
      "Enhanced collaboration: Ensure all stakeholders have access to up-to-date lead information.",
    ],
  },
];

const contactRelationshipDescription = [
  {
    title: "Overview",
    content: [
      "Connect to multiple CRMs and manage contacts",
      "Import contacts or reports from various sources",
      "Upload CSV files and start tracking job changes ",
      "Categorize contacts in multiple buckets to organize and prioritize leads",
    ],
  },
];
const crmSettingsDescription = [
  {
    title: "Overview",
    content: [
      "Manage integrations with multiple CRMs",
      "Automate lead management tasks",
      "Implemented custom single and multi select components",
    ],
  },
];

const outreachDescription = [
  {
    title: "Overview",
    content: [
      "View Outreaches: See a list of all available outreach templates.",
      "Timeline View: Visualize the outreach process with a interactive timeline, showing each step involved.",
      "Step Details: Expand step details to access additional information, including descriptions.",
      "Clone Outreaches: Clone outreaches to your account, using them as templates to streamline your workflow and save time.",
    ],
  },
];

const featureList = [
  {
    heading: "Dashboard",
    image: DashboardImage,
    description: dashboardDescription,
  },
  {
    heading: "Contact Relationship",
    image: ContactRelImage,
    description: contactRelationshipDescription,
  },
  {
    heading: "Outreach Integration",
    image: outreachImage,
    description: outreachDescription,
  },
  {
    heading: "CRM Settings",
    image: CRMSettingImage,
    description: crmSettingsDescription,
  },
];

function Boomerang() {
  return (
    <section className="">
      <h3 className="project-heading">Boomerang</h3>
      <ProjectTechStack techStack={techStack} />
      {featureList.map(({ heading, image, description }) => (
        <ProjectFeature
          key={heading}
          heading={heading}
          image={image}
          description={description}
        />
      ))}
    </section>
  );
}

export default Boomerang;
