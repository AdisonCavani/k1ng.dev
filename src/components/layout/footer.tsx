import { isUrlInternal } from "@lib/helpers";
import { SITE_AUTHOR } from "config";
import Link from "next/link";
import { Fragment } from "react";

type FooterEntry = {
  name: string;
  url: string;
};

const footerData: FooterEntry[] = [
  { name: "Analytics", url: "https://insights.k1ng.dev/k1ng.dev" },
  { name: "Privacy", url: "https://plausible.io/privacy" },
  { name: "RSS feed", url: "/atom.xml" },
  { name: "To-do List", url: "https://todo.k1ng.dev" },
];

function Footer() {
  return (
    <footer className="mx-auto w-full px-4 sm:px-6 lg:px-8">
      <div className="border-t py-10">
        <p className="text-center text-sm leading-6 text-slate-600">
          © {new Date().getUTCFullYear()} {SITE_AUTHOR}. All rights reserved.
        </p>
        <div className="mt-8 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
          {footerData.map(({ name, url }, index) => (
            <Fragment key={index}>
              {isUrlInternal(url) &&
              url !== "/rss.xml" &&
              url !== "/atom.xml" ? (
                <>
                  <Link href={url}>{name}</Link>
                  {index !== footerData.length - 1 && (
                    <hr className="h-4 w-px bg-neutral-300" />
                  )}
                </>
              ) : (
                <>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    {name}
                  </a>
                  {index !== footerData.length - 1 && (
                    <hr className="h-4 w-px bg-neutral-300" />
                  )}
                </>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
