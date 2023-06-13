import PreviewSuspense from "@components/layout/preview-suspense";
import { getProjectsData } from "@lib/queries";
import { draftMode } from "next/headers";
import { lazy } from "react";
import ProjectCard from "./project-card";

const ProjectsPreview = lazy(() => import("@components/home/projects-preview"));

async function ProjectsWrapper() {
  const { isEnabled } = draftMode();

  if (isEnabled)
    return (
      <PreviewSuspense fallback="Loading">
        <ProjectsPreview />
      </PreviewSuspense>
    );

  const projects = await getProjectsData();

  return (
    <>
      {projects.map((value, index) => (
        <ProjectCard key={index} {...value} priority={index === 0} />
      ))}
    </>
  );
}

export default ProjectsWrapper;
