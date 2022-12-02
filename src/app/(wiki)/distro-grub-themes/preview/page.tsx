import type { WikiPreviewSchema } from "@lib/types";
import Theme from "./Theme";

async function Preview() {
  const data = (await fetch(
    "https://raw.githubusercontent.com/AdisonCavani/distro-grub-themes/master/themes.json"
  ).then((res) => res.json())) as WikiPreviewSchema;

  const distros = data.distros.sort((a, b) => a.name.localeCompare(b.name));
  const vendors = data.vendors.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <article className="w-full max-w-none">
      <div className="flex justify-center my-6">
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
          <Theme key={index} {...theme} priority={index < 3} />
        ))}
      </div>

      <div className="flex justify-center my-6">
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
          <Theme key={index} {...theme} priority={index < 3} />
        ))}
      </div>
    </article>
  );
}

export default Preview;
