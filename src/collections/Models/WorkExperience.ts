import { GROUP } from "../../constants";
import { CollectionConfig } from "payload/types";

const WorkExperience: CollectionConfig = {
  slug: "work-experience",
  admin: {
    group: GROUP.MODELS,
    useAsTitle: "companyName",
  },
  fields: [
    {
      name: "person",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    {
      name: "companyName",
      type: "text",
      required: true,
    },
    {
      name: "jobTitle",
      type: "text",
      required: true,
    },
    {
      name: "location",
      type: "text",
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
      name: "description",
      type: "textarea",
    },
  ],
};

export default WorkExperience;
