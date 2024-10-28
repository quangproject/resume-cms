import { GROUP } from "../../constants";
import { CollectionConfig } from "payload/types";

const Education: CollectionConfig = {
  slug: "education",
  admin: {
    group: GROUP.MODELS,
    useAsTitle: "institutionName",
  },
  fields: [
    {
      name: "person",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    {
      name: "institutionName",
      type: "text",
      required: true,
    },
    {
      name: "degree",
      type: "text",
    },
    {
      name: "fieldOfStudy",
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

export default Education;
