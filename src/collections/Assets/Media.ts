import { GROUP } from "../../constants";
import { CollectionConfig, Field } from "payload/types";
import { CLOUDINARY_GROUP_FIELDS, CLOUDINARY_GROUP_NAME } from "../../type";
import beforeChangeHook from "./hooks/beforeChange";
import afterDeleteHook from "./hooks/afterDelete";

const allowedMimeTypes = ["image/*"];

const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true
  },
  admin: {
    group: GROUP.ASSETS,
    useAsTitle: "altText"
  },
  upload: {
    staticURL: "/resume-cms/media",
    staticDir: "resume-cms/media",
    mimeTypes: allowedMimeTypes,
    disableLocalStorage: true,
    crop: true,
    focalPoint: true
  },
  fields: [
    {
      name: "altText",
      type: "text",
      label: "Alt Text"
    },
    {
      name: CLOUDINARY_GROUP_NAME,
      type: "group",
      fields: CLOUDINARY_GROUP_FIELDS as Field[],
      admin: { readOnly: true }
    }
  ],
  hooks: {
    beforeChange: [beforeChangeHook],
    afterDelete: [afterDeleteHook],
    afterRead: [
      ({
        doc, // full document data
        req, // full express request
        query, // JSON formatted query
        findMany // boolean to denote if this hook is running against finding one, or finding many
      }) => {
        return {
          ...doc,
          url: doc[CLOUDINARY_GROUP_NAME]?.secure_url
        };
      }
    ]
  }
};

export default Media;
