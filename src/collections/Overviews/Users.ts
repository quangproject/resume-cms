import { RowLabelArgs } from "payload/dist/admin/components/forms/RowLabel/types";
import { GROUP } from "../../constants";
import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  auth: {
    useAPIKey: true
  },
  admin: {
    group: GROUP.OVERVIEWS,
    useAsTitle: "email"
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "firstName",
          type: "text",
          required: true
        },
        {
          name: "lastName",
          type: "text",
          required: true
        }
      ]
    },
    {
      name: "telephone",
      type: "text"
    },
    {
      name: "address",
      type: "textarea"
    },
    {
      name: "socials",
      type: "array",
      fields: [
        {
          name: "platform",
          type: "text"
        },
        {
          name: "url",
          type: "text"
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
            return data?.platform || "New Social";
          }
        }
      }
    },
    {
      name: "about",
      type: "group",
      fields: [
        {
          name: "title",
          type: "text"
        },
        {
          name: "content",
          type: "textarea"
        },
        {
          name: "summary",
          type: "textarea"
        },
        {
          name: "curriculumVitae",
          type: "upload",
          relationTo: "file"
        }
      ]
    },
    {
      name: "avatar", // Field for the profile picture
      type: "upload",
      relationTo: "media" // Relates to the Media collection
    }
  ]
};

export default Users;
