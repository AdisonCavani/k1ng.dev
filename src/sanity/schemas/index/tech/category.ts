import { defineField, defineType } from "sanity";

export default defineType({
  name: "tech-category",
  title: "Tech category",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "color",
      title: "Text color",
      type: "color",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "background",
      title: "Background color",
      type: "color",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
