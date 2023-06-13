import { type SchemaTypeDefinition } from "sanity";
import blogAuthor from "./schemas/blog/author";
import blogCategory from "./schemas/blog/category";
import blogPost from "./schemas/blog/post";
import footer from "./schemas/index/footer";
import project from "./schemas/index/project";
import techCategory from "./schemas/index/tech/category";
import techItem from "./schemas/index/tech/item";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blogAuthor,
    blogCategory,
    blogPost,
    footer,
    project,
    techCategory,
    techItem,
  ],
};
