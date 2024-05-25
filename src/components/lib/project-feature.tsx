"use client";

import Image, { StaticImageData } from "next/image";
import MacWindowWrapper from "./mac-window-wrapper";

function ProjectFeature({
  heading,
  image,
  description,
}: {
  heading: string;
  image: StaticImageData;
  description: {
    title: string;
    content: string[];
  }[];
}) {
  return (
    <section className="description-section">
      <div className="lg:w-1/3 w-full">
        <h3 className="description-heading">{heading}</h3>
        {description.map(({ content, title }) => (
          <section key={title} className="flex flex-col gap-2 pt-4">
            <p className="description-sub-heading">{title}</p>
            {content.map((description) => (
              <p key={description} className="text-description">
                {description}
              </p>
            ))}
          </section>
        ))}
      </div>
      <MacWindowWrapper tagName="dashboard">
        <Image height={450} src={image} alt="dashboard" />
      </MacWindowWrapper>
    </section>
  );
}

export default ProjectFeature;
