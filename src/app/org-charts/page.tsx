"use client";

import ProjectTechStack from "../../components/lib/project-tech-stack";

const descriptionMap = {
  "react Flow Features": [
    {
      name: "React Flow Integration",
      description:
        "The organization chart is built on top of React Flow, a popular library for building interactive diagrams and charts.",
    },
    {
      name: "Customizable Nodes and Edges",
      description:
        "Users can customize the appearance and behavior of nodes and edges in the chart.",
    },
    {
      name: "Built-in Layout Algorithms",
      description:
        "The chart uses built-in layout algorithms to automatically arrange nodes and edges in a visually appealing way.",
    },
  ],
  "Core Features": [
    {
      name: "Drag-and-Drop Interface",
      description:
        "Users can drag and drop CRM contacts onto the canvas to create an organization chart.",
    },
    {
      name: "Automatic Connection",
      description:
        "When a user drags and drops a contact, the chart automatically connects the contact to the correct position in the organization chart.",
    },
    {
      name: "Real-time Updates",
      description:
        "If the relationship between contacts changes, the chart updates automatically to reflect the new relationships.",
    },
  ],
  "canvas Features": [
    {
      name: "Rich Text Placeholders",
      description:
        "Users can add rich text placeholders to the canvas to provide additional context or information about each contact.",
    },
    {
      name: "Zoom and Pan",
      description:
        "Users can zoom in and out of the canvas and pan across the chart to view different sections.",
    },
  ],
  "connection Features": [
    {
      name: "Rich Text Notes",
      description:
        "Users can add rich text notes between two connections to provide additional context or information about the relationship between the two contacts.",
    },
    {
      name: "Customizable Connection Line Appearance",
      description:
        "Users can customize the appearance of each edge (connection) on the canvas, including colors, styles, and labels.",
    },
  ],
  "filtering And Visualization": [
    {
      name: "Filtering",
      description:
        "Users can filter the organization chart by various criteria, such as department, job title, or location.",
    },
    {
      name: "Interactive Visualization",
      description:
        "The chart is interactive, allowing users to hover over nodes to view additional information or click on nodes to open into more detail.",
    },
  ],
  "additional Features": [
    {
      name: "Export Options",
      description: "Users can export the organization chart as a image",
    },
    {
      name: "Integration with CRM",
      description:
        "The organization chart integrates seamlessly with the CRM system, allowing users to access contact information and update the chart in real-time.",
    },
  ],
};

const techStack = [
  "react",
  "typescript",
  "redux",
  "react-flow",
  "tailwind css",
  "Radix UI",
  "RTK Query",
  "Graphql",
  "webpack 5",
];

function OrgCharts() {
  return (
    <section className="">
      <h3 className="project-heading">Org Charts</h3>
      <ProjectTechStack techStack={techStack} />
      <iframe
        width="960"
        height="615"
        className="w-full my-24 org-chart-iframe"
        src="https://www.youtube.com/embed/vGxUmBbfMgE?si=DgdlLle27lZ6p-cT"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      {Object.entries(descriptionMap).map(([title, detailList]) => (
        <section
          key={title}
          className="flex flex-col gap-8 lg:flex-row justify-between my-12 border-0 border-b pb-4"
        >
          <div className="flex flex-col md:flex-row items-start gap-5">
            <div className="min-w-80">
              <h3 className="description-heading">{title}</h3>
            </div>
            <h2 className=" text-gray-800 flex flex-col justify-center gap-4">
              {detailList?.map(({ description, name }) => (
                <section key={name} className="flex flex-col gap-1">
                  <p className="description-sub-heading">{name}</p>
                  <p className="text-slate-500 text-sm leading-loose">
                    {description}
                  </p>
                </section>
              ))}
            </h2>
          </div>
        </section>
      ))}
    </section>
  );
}

export default OrgCharts;
