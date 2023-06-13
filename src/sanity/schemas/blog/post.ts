import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => [
        Rule.required()
          .min(40 - 16)
          .warning("A title of min. 40 characters is recommended"),
        Rule.max(70 - 16).warning("Title shouldn't exceed 70 characters"),
      ],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) => [
        Rule.required()
          .min(50)
          .warning("A description of min. 50 characters is recommended"),
        Rule.max(160).warning("Description shouldn't exceed 160 characters"),
      ],
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 60,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "authors",
      title: "Authors",
      type: "array",
      of: [{ type: "reference", to: { type: "author" } }],
      validation: (Rule) => [Rule.required(), Rule.unique()],
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
      validation: (Rule) => [Rule.required(), Rule.unique()],
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "markdown",
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: "title",
      firstName: "authors.0.firstName",
      lastName: "authors.0.lastName",
      media: "coverImage",
    },
    prepare(selection) {
      const { firstName, lastName } = selection;
      return { ...selection, subtitle: `by ${firstName} ${lastName}` };
    },
  },
});
