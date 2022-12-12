import { urlFor } from "@lib/sanity";
import type { TechItemSchema } from "@lib/types";
import Image from "next/image";

function TechIcon({
  background,
  description,
  href,
  image,
  name,
}: TechItemSchema) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="ease-[spring(1 100 10 10)] rounded-lg border border-neutral-200 bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-dark-500 dark:bg-dark-600"
    >
      <div className="flex flex-row gap-4">
        <div className="relative overflow-hidden p-2">
          <div
            style={{ backgroundColor: background }}
            className="absolute inset-0 h-[52px] w-[52px] rounded-md opacity-20"
          />
          <Image
            src={urlFor(image).url()}
            alt={`${name} logo`}
            width={36}
            height={36}
            className="h-9 w-9 rounded-md"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col">
          <p className="font-bold">{name}</p>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </a>
  );
}

export default TechIcon;
