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
      type: "row",
      fields: [
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
      ],
    },
    {
      name: "location",
      type: "text",
      required: true,
    },
    {
      type: "row",
      fields: [
        {
          name: "startDate",
          type: "date",
          admin: {
            date: {
              pickerAppearance: "monthOnly",
              displayFormat: "MMMM yyyy",
            },
          },
          required: true,
        },
        {
          name: "endDate",
          type: "date",
          admin: {
            date: {
              pickerAppearance: "monthOnly",
              displayFormat: "MMMM yyyy",
            },
          },
        },
      ],
    },
    {
      name: "description",
      type: "richText",
      required: true,
    },
  ],
};

export default WorkExperience;
