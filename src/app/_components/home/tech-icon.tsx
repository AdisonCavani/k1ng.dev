import type { TechItemSchema } from "@lib/types";
import { urlForImage } from "@sanity/lib/image";
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
      className="rounded-lg border border-neutral-200 bg-white p-4 transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex flex-row gap-4">
        <div className="relative overflow-hidden p-2">
          <div
            style={{ backgroundColor: background }}
            className="absolute inset-0 size-[52px] rounded-md opacity-20"
          />
          <Image
            src={urlForImage(image).url()}
            alt={`${name} logo`}
            width={36}
            height={36}
            className="size-9 rounded-md"
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
