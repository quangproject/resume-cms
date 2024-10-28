import { GROUP } from "../../constants";
import { CollectionConfig } from "payload/types";

const Interests: CollectionConfig = {
  slug: "interests",
  admin: {
    group: GROUP.MODELS,
    useAsTitle: "interestName",
  },
  fields: [
    {
      name: "person",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    {
      name: "interestName",
      type: "text",
      required: true,
    },
  ],
};

export default Interests;
