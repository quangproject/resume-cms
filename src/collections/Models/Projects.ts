import { GROUP } from "../../constants";
import { CollectionConfig } from "payload/types";

const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    group: GROUP.MODELS,
    useAsTitle: "projectName"
  },
  fields: [
    {
      name: "person",
      type: "relationship",
      relationTo: "users",
      required: true
    },
    {
      name: "projectName",
      type: "text",
      required: true
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
              displayFormat: "MMMM yyyy"
            }
          },
          required: true
        },
        {
          name: "endDate",
          type: "date",
          admin: {
            date: {
              pickerAppearance: "monthOnly",
              displayFormat: "MMMM yyyy"
            }
          }
        }
      ]
    },
    {
      name: "link",
      type: "text"
    },
    {
      name: "description",
      type: "richText",
      required: true
    },
    {
      name: "image", // Field for the profile picture
      type: "upload",
      relationTo: "media" // Relates to the Media collection
    }
  ]
};

export default Projects;
