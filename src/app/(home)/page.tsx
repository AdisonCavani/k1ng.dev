import {
  GetProjectsData,
  GetTechCategoryData,
  GetTechItemsData,
} from "@lib/queries";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
import TechStack from "./TechStack";

async function Home() {
  const projects = await GetProjectsData();
  const items = await GetTechItemsData();
  const categories = await GetTechCategoryData();

  return (
    <main className="max-w-5xl pt-8 px-8 mx-auto mt-14">
      <div className="flex flex-col gap-6">
        {/* Introduction */}
        <div className="flex max-w-2xl flex-col-reverse items-start sm:flex-row">
          <div className="flex flex-col pr-8">
            <h1 className="mb-2 text-4xl font-bold tracking-tight">
              Adison Cavani
            </h1>
            <h2 className="mb-4">
              Full-stack Developer,{" "}
              <span className="font-semibold">student</span>
            </h2>
            <p className="mb-4">
              .NET Backend Developer. Currently learning web development -
              cloud, serverless and React w/ Next.js.
            </p>
          </div>
          <div className="relative mb-8 mr-auto w-20 rounded-full border-2 sm:mb-0 sm:w-44">
            <Image
              src="/static/images/avatar.webp"
              alt="Adison Cavani"
              width={176}
              height={176}
              sizes="20vw"
              loading="eager"
            />
          </div>
        </div>

        {/* Projects */}
        <div className="flex justify-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-center text-4xl font-bold">My projects</h2>

            <hr className="undefined border-t-2 border-neutral-300" />

            <p className="text-center text-lg font-medium text-neutral-600">
              A list of my personal projects.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((value, index) => (
            // @ts-expect-error
            <ProjectCard key={index} {...value} priority={index === 0} />
          ))}
        </div>

        {/* Tech-stack */}
        <div className="flex justify-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-center text-4xl font-bold">Technologies</h2>

            <hr className="undefined border-t-2 border-neutral-300" />

            <p className="text-center text-lg font-medium text-neutral-600">
              A list of technologies I&apos;m familiar with.
            </p>
          </div>
        </div>

        <TechStack categories={categories} items={items} />
      </div>
    </main>
  );
}

export default Home;
