import { GROUP } from "../../constants";
import { CollectionConfig } from "payload/types";

const Languages: CollectionConfig = {
  slug: "languages",
  admin: {
    group: GROUP.MODELS,
    useAsTitle: "languageName",
  },
  fields: [
    {
      name: "person",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    {
      name: "languageName",
      type: "text",
      required: true,
    },
    {
      name: "proficiencyLevel",
      type: "select",
      options: ["Basic", "Fluent", "Native", "Professional"],
    },
  ],
};

export default Languages;
