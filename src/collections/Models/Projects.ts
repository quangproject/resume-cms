import { GROUP } from "../../constants";
import { CollectionConfig } from "payload/types";

const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    group: GROUP.MODELS,
    useAsTitle: "projectName",
  },
  fields: [
    {
      name: "person",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    {
      name: "projectName",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "startDate",
      type: "date",
    },
    {
      name: "endDate",
      type: "date",
    },
    {
      name: "technologiesUsed",
      type: "richText",
    },
    {
      name: "link",
      type: "text",
    },
  ],
};

export default Projects;
