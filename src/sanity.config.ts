import { colorInput } from "@sanity/color-input";
import { apiVersion, previewSecretId, projectId } from "@sanity/env";
import { defaultDocumentNode } from "@sanity/lib/doc-node";
// import { previewDocumentNode } from "@sanity/plugins/preview";
import { productionUrl } from "@sanity/plugins/production-url";
import blogAuthor from "@sanity/schemas/blog/author";
import blogCategory from "@sanity/schemas/blog/category";
import blogPost from "@sanity/schemas/blog/post";
import project from "@sanity/schemas/index/project";
import techCategory from "@sanity/schemas/index/tech/category";
import techItem from "@sanity/schemas/index/tech/item";
// import { visionTool } from "@sanity/vision";
import {
  defineConfig,
  definePlugin,
  // , isDev
} from "sanity";
import { markdownSchema } from "sanity-plugin-markdown";
import { deskTool } from "sanity/desk";

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = [
  blogPost.name,
  project.name,
  techCategory.name,
  techItem.name,
];

// TODO: add this again
// const devOnlyPlugins = [visionTool({ defaultApiVersion: apiVersion })];

const sharedConfig = definePlugin({
  name: "shareConfig",
  plugins: [
    colorInput(),
    deskTool({
      defaultDocumentNode: defaultDocumentNode,
    }),
    markdownSchema(),
    productionUrl({
      apiVersion,
      previewSecretId,
      types: PREVIEWABLE_DOCUMENT_TYPES,
    }),
    // ...(isDev ? devOnlyPlugins : []),
  ],

  schema: {
    types: [
      blogAuthor,
      blogCategory,
      blogPost,
      project,
      techCategory,
      techItem,
    ],
  },
});

export default defineConfig([
  {
    name: "production",
    title: "Production",
    projectId: projectId,
    dataset: "production",
    basePath: "/studio/prod",
    plugins: [sharedConfig()],
  },
  {
    name: "development",
    title: "Development",
    projectId: projectId,
    dataset: "development",
    basePath: "/studio/dev",
    plugins: [sharedConfig()],
  },
]);
