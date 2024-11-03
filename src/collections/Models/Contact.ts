import { GROUP } from "../../constants";
import { CollectionConfig } from "payload/types";

const Contacts: CollectionConfig = {
  slug: "contacts",
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
      name: "fullName",
      type: "text",
      required: true,
    },
    {
      type: "row",
      fields: [
        {
          name: "email",
          type: "email",
          required: true,
        },
        {
          name: "telephone",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "message",
      type: "textarea",
      required: true,
    },
  ],
};

export default Contacts;
