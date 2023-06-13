import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "markdown",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "url",
      title: "Url",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "github",
      title: "Github url",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "technology",
      title: "Techology",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "color",
      title: "Color",
      type: "color",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
