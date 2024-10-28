import { GROUP } from "../../constants";
import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  auth: {
    useAPIKey: true,
  },
  admin: {
    group: GROUP.OVERVIEWS,
    useAsTitle: "email",
  },
  fields: [
    {
      name: "firstName",
      type: "text",
      required: true,
    },
    {
      name: "lastName",
      type: "text",
      required: true,
    },
    {
      name: "telephone",
      type: "text",
    },
    {
      name: "address",
      type: "textarea",
    },
    {
      name: "linkedin",
      type: "text",
    },
    {
      name: "github",
      type: "text",
    },
    {
      name: "summary",
      type: "textarea",
    },
    {
      name: "avatar", // Field for the profile picture
      type: "upload",
      relationTo: "media", // Relates to the Media collection
    },
  ],
};

export default Users;
