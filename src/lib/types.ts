import type { Image } from "sanity";

// Index types
export type FooterSchema = {
  name: string;
  url: string;
};

export type ProjectSchema = {
  name: string;
  description: string;
  url: string;
  github: string;
  image: Image;
  technology: string;
  color: string;
};

export type TechCategorySchema = {
  id: string;
  name: string;
  image: Image;
  color: string;
  background: string;
};

export type TechItemSchema = {
  name: string;
  description: string;
  href: string;
  image: Image;
  background: string;
  category: TechCategorySchema;
};

// Blog types
export type TagSchema = {
  name: string;
  slug: string;
};

export type AuthorSchema = {
  firstName: string;
  lastName: string;
  image: Image;
  github: string;
  slug: string;
};

export type PostSchema = {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  coverImage: Image;
  authors: Array<AuthorSchema>;
  categories: Array<TagSchema>;
  content: string;
  slug: string;
};

// Wiki types
export type WikiPreviewSchema = {
  distros: WikiThemeSchema[];
  vendors: WikiThemeSchema[];
};

export type WikiThemeSchema = {
  name: string;
  image: string;
  theme: string;
  versionAdded?: string | undefined;
};

export type WikiSidebarItemSchema = {
  name: string;
  href: string;
};

export type WikiHeadingsSchema = {
  text: string;
  level: number;
};
