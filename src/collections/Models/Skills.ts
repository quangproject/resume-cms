import { GROUP } from "../../constants";
import { CollectionConfig } from "payload/types";

const Skills: CollectionConfig = {
  slug: "skills",
  admin: {
    group: GROUP.MODELS,
    useAsTitle: "skillName",
  },
  fields: [
    {
      name: "person",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    {
      name: "skillName",
      type: "text",
      required: true,
    },
    {
      name: "proficiencyLevel",
      type: "select",
      options: ["Beginner", "Intermediate", "Advanced", "Expert"],
    },
  ],
};

export default Skills;
