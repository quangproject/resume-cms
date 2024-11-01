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
      type: "row",
      fields: [
        {
          name: "institutionName",
          type: "text",
          required: true,
        },
        {
          name: "degree",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "fieldOfStudy",
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

export default Education;
