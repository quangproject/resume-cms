import { RowLabelArgs } from "payload/dist/admin/components/forms/RowLabel/types";
import { GROUP } from "../../constants";
import { CollectionConfig } from "payload/types";

const Skills: CollectionConfig = {
  slug: "skills",
  admin: {
    group: GROUP.MODELS,
    useAsTitle: "technologyName"
  },
  fields: [
    {
      name: "person",
      type: "relationship",
      relationTo: "users",
      required: true
    },
    {
      name: "technologyName",
      type: "text",
      required: true
    },
    {
      name: "technicalIcon",
      type: "upload",
      relationTo: "media",
      required: true
    },
    {
      name: "skills",
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
          required: true
        },
        {
          name: "icon",
          type: "upload",
          relationTo: "media"
        }
      ],
      admin: {
        components: {
          RowLabel: ({ data, index }: RowLabelArgs) => {
            return data?.name || "New Skill";
          },
        },
      },
    }
  ]
};

export default Skills;
