import {
  GetProjectsData,
  GetTechCategoryData,
  GetTechItemsData,
} from "@lib/queries";
import { SITE_AUTHOR } from "config";
import type { Metadata } from "next";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
import TechStack from "./TechStack";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Home",
};

async function Home() {
  const projects = await GetProjectsData();
  const items = await GetTechItemsData();
  const categories = await GetTechCategoryData();

  return (
    <main className="mx-auto mt-16 max-w-5xl py-8 px-8">
      <div className="flex flex-col gap-6">
        {/* Introduction */}
        <div className="flex max-w-2xl flex-col-reverse items-start sm:flex-row">
          <div className="flex flex-col pr-8">
            <h1 className="mb-2 text-4xl font-bold tracking-tight">
              {SITE_AUTHOR}
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
              alt="Avatar"
              width={176}
              height={176}
              sizes="20vw"
              priority
            />
          </div>
        </div>

        {/* Projects */}
        <div className="flex justify-center">
          <div className="flex flex-col gap-y-2">
            <h2 className="text-center text-3xl font-bold">My projects</h2>

            <hr className="border-t-1 border-neutral-300" />

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
          <div className="flex flex-col gap-y-2">
            <h2 className="text-center text-3xl font-bold">Technologies</h2>

            <hr className="border-t-1 border-neutral-300" />

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
