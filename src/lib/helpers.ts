import type { WikiHeadingsSchema } from "./types";

export const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const isUrlInternal = (href: string) =>
  href && (href.startsWith("/") || href.startsWith("#"));

export function getHeadings(source: string) {
  const headingLines = source.split("\n").filter((line) => {
    return line.match(/^(#{1,6}\s*[\S]+)/);
  });

  return headingLines.map((raw) => {
    const text = raw.replace(/^#*\s/, "");
    const level = raw.lastIndexOf("#") + 1;

    return { text, level } as WikiHeadingsSchema;
  });
}
