import afterChangeHook from "../../hooks/afterChange";
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
      type: "row",
      fields: [
        {
          name: "fullName",
          type: "text",
          required: true,
        },
        {
          name: "email",
          type: "email",
          required: true,
        },
      ],
    },
    {
      name: "subject",
      type: "text",
      required: true,
    },
    {
      name: "message",
      type: "textarea",
      required: true,
    },
  ],
  hooks: {
    afterChange: [afterChangeHook],
  },
};

export default Contacts;
