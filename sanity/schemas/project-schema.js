const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "type",
      title: "Type of project",
      type: "string",
      options: {
        list: [
          { title: "Something else", value: "1" },
          { title: "Frontend", value: "frontend" },
          { title: "App Dev", value: "appdev" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "1",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: "alt",
          title: "Alt text to picture",
          type: "string",
        },
      ],
    },
    {
      name: "github",
      title: "GitHub Link",
      type: "url",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default project;
