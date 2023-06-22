import { colorInput } from "@sanity/color-input";
import { defaultDocumentNode } from "@sanity/lib/doc-node";
import { visionTool } from "@sanity/vision";
import { defineConfig, definePlugin, isDev } from "sanity";
import { markdownSchema } from "sanity-plugin-markdown";
import { deskTool } from "sanity/desk";
import { apiVersion, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

const devOnlyPlugins = [visionTool({ defaultApiVersion: apiVersion })];

const sharedConfig = definePlugin({
  name: "shareConfig",
  plugins: [
    colorInput(),
    deskTool({
      defaultDocumentNode: defaultDocumentNode,
    }),
    markdownSchema(),
    // @ts-expect-error
    ...(isDev ? devOnlyPlugins : []),
  ],

  schema: {
    types: schema.types,
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
