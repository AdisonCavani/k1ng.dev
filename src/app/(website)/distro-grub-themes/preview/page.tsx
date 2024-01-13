import Sidebar from "@components/wiki/sidebar";
import Theme from "@components/wiki/theme";
import { getReleaseData } from "@lib/github";
import type { WikiPreviewSchema } from "@lib/types";
import { DISTRO_GRUB_THEMES_CONTENT, SITE_URL } from "config";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Preview / Wiki",
  description:
    "Preview wiki page. Official documentation for distro-grub-themes.",
  alternates: {
    canonical: `${SITE_URL}/distro-grub-themes/preview`,
  },
};

async function Preview() {
  const data = (await fetch(`${DISTRO_GRUB_THEMES_CONTENT}/themes.json`).then(
    (res) => res.json(),
  )) as WikiPreviewSchema;

  const distros = data.distros.sort((a, b) => a.name.localeCompare(b.name));
  const vendors = data.vendors.sort((a, b) => a.name.localeCompare(b.name));
  const latestTag = await getReleaseData();

  return (
    <main className="mx-auto mt-16 flex max-w-7xl flex-col gap-4 p-8 lg:flex-row">
      <article className="w-full max-w-none">
        <div className="my-6 flex justify-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-center text-4xl font-bold">Distro themes</h2>
            <hr className="border-t-2 border-neutral-300" />
            <p className="text-center text-lg font-medium text-neutral-600">
              Preview of themes for distributions
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {distros.map((theme, index) => (
            <Theme
              key={index}
              {...theme}
              priority={index < 3}
              latestTag={latestTag}
            />
          ))}
        </div>

        <div className="my-6 flex justify-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-center text-4xl font-bold">Vendor themes</h2>
            <hr className="border-t-2 border-neutral-300" />
            <p className="text-center text-lg font-medium text-neutral-600">
              Preview of themes for vendors
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {vendors.map((theme, index) => (
            <Theme
              key={index}
              {...theme}
              priority={index < 3}
              latestTag={latestTag}
            />
          ))}
        </div>
      </article>

      <Sidebar slug="preview" />
    </main>
  );
}

export default Preview;
