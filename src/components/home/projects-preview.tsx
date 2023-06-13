"use client";

import { projectsQuery } from "@lib/queries";
import { ProjectSchema } from "@lib/types";
import { usePreview } from "@sanity/lib/preview";
import ProjectCard from "./project-card";

function ProjectsPreview() {
  const projects = usePreview(null, projectsQuery) as ProjectSchema[];

  return (
    <>
      {projects.map((value, index) => (
        <ProjectCard key={index} {...value} priority={index === 0} />
      ))}
    </>
  );
}

export default ProjectsPreview;
