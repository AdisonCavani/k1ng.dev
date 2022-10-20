// Index types
export type FooterSchema = {
  name: string;
  url: string;
};

export type TechCategorySchema = {
  id: string;
  name: string;
  image: string;
};

export type TechItemSchema = {
  name: string;
  description: string;
  href: string;
  image: string;
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
  image: string;
  github: string;
  slug: string;
};

export type PostSchema = {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  coverImage: string;
  authors: Array<AuthorSchema>;
  categories: Array<TagSchema>;
  content: string;
  slug: string;
};
