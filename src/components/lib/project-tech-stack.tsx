"use client";
function ProjectTechStack({ techStack }: { techStack: string[] }) {
  return (
    <section className="my-4 w-full md:w-2/3">
      <p className="title-chip inline-block my-5">Tech Stack</p>
      <section className="flex gap-4 flex-wrap">
        {techStack.map((tech) => (
          <p key={tech} className="primary-chip">
            {tech}
          </p>
        ))}
      </section>
    </section>
  );
}

export default ProjectTechStack;
