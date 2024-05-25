"use client";

import DashboardImage from "../../../public/images/msp-dashboard.png";
import PlanDetailsImage from "../../../public/images/msp-plan-details.png";
import PlanImage from "../../../public/images/msp-plan.png";
import OverviewImage from "../../../public/images/msp-overview.png";
import ResourcesImage from "../../../public/images/msp-resources.png";
import ProjectFeature from "../../components/lib/project-feature";
import ProjectTechStack from "../../components/lib/project-tech-stack";

const techStack = [
  "react",
  "typescript",
  "redux",
  "tailwind css",
  "Radix UI",
  "RTK Query",
  "react router",
  "Graphql",
  "webpack 5",
  "material ui",
  "lexical rich text editor",
  "apollo graphql",
  "keyclok",
];

const mspDashboard = [
  {
    title: "Overview",
    content: [
      "The MSP Dashboard provides a comprehensive overview of all ongoing deals, enabling sellers to track progress, identify opportunities, and make data-driven decisions. ",
      "Implemented infinite scrolling and windowing with react base table",
    ],
  },
];

const mspPlan = [
  {
    title: "Overview",
    content: [
      "The Mutual Success Plan (MSP) is a Buyer engagement platform for Sellers, designed to facilitate collaborative partnerships between sellers and buyers.",
      "The MSP offers a robust project planning feature, empowering sellers to develop and manage tailored project plans that meet the unique requirements of each buyer, ensuring seamless collaboration.",
      "The Mutual Success Plan is a shareable and accessible platform, allowing sellers to publish and share their plans with multiple stakeholders involved in the buying process, thereby promoting transparency, alignment, and efficient decision-making.",
    ],
  },
];

const mspPlanDetails = [
  {
    title: "Overview",
    content: [
      "Developed an optimistic UI that provides immediate feedback to users with background data synchronization, enhancing the user experience.",
      "Scaled complex data sets efficiently by employing Redux-toolkit for data normalization, state management, API caching, and reducing code boilerplate by 40%.",
      "Integrated rich text editor ",
    ],
  },
];
const mspOverview = [
  {
    title: "Overview",
    content: ["Overview of the deal with timeline tracking"],
  },
];
const mspResources = [
  {
    title: "Overview",
    content: [
      "Dashboard for all the user uploaded or attached documents in MSP",
      "File upload is implemented with uppy.",
    ],
  },
];

const featureList = [
  {
    heading: "Mutual Success Plan",
    image: PlanImage,
    description: mspPlan,
  },
  {
    heading: "Mutual Success Plan",
    image: PlanDetailsImage,
    description: mspPlanDetails,
  },
  {
    heading: "MSP Dashboard",
    image: DashboardImage,
    description: mspDashboard,
  },
  {
    heading: "MSP Overview",
    image: OverviewImage,
    description: mspOverview,
  },
  {
    heading: "Resource Management",
    image: ResourcesImage,
    description: mspResources,
  },
];

function Boomerang() {
  return (
    <section className="">
      <h3 className="project-heading">Buyerassist</h3>
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
