import type { WikiThemeSchema } from "@lib/types";
import { DISTRO_GRUB_THEMES, DISTRO_GRUB_THEMES_CONTENT } from "config";
import Image from "next/image";

interface Props extends WikiThemeSchema {
  priority: boolean;
}

function Theme({ image, name, priority, theme }: Props) {
  return (
    <div className="flex flex-col ease-[spring(1 100 10 10)] overflow-hidden rounded-lg border bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="w-full cursor-pointer">
        <Image
          width={480}
          height={270}
          src={`${DISTRO_GRUB_THEMES_CONTENT}/preview/${encodeURIComponent(
            image
          )}`}
          alt="Theme preview"
          className="w-full"
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 25vw"
          priority={priority ?? false}
        />
      </div>
      <div className="px-6 pb-5 flex flex-col flex-grow">
        <div className="mt-4 mb-3 flex flex-row justify-between">
          <h3 className="font-medium">{name}</h3>
          <div>
            <span className="rounded-xl px-2.5 py-0.5 text-[11px] font-bold bg-blue-100 text-blue-700">
              v2.8
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="text-sm text-neutral-600">
            <p>
              A clean and minimalistic GRUB theme with color accent for {name}
            </p>
          </div>
          <a
            href={`${DISTRO_GRUB_THEMES}/raw/master/themes/${encodeURIComponent(
              theme
            )}`}
            target="_blank"
            rel="noreferrer"
            className="w-full mt-4 rounded-md bg-blue-100 text-blue-700 py-2 text-sm font-semibold"
          >
            <div className="flex justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                <polyline points="7 11 12 16 17 11"></polyline>
                <line x1="12" y1="4" x2="12" y2="16"></line>
              </svg>
              Download
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Theme;
