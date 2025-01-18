import { GROUP, MIME_TYPES } from "../../constants";
import { CollectionConfig, Field } from "payload/types";
import { CLOUDINARY_GROUP_FIELDS, CLOUDINARY_GROUP_NAME } from "../../type";
import beforeChangeHook from "./hooks/beforeChange";
import afterDeleteHook from "./hooks/afterDelete";

const allowedMimeTypes = [MIME_TYPES.DOCX, MIME_TYPES.PDF];

const File: CollectionConfig = {
  slug: "file",
  access: {
    read: () => true
  },
  admin: {
    group: GROUP.ASSETS,
    useAsTitle: "altText"
  },
  upload: {
    staticURL: "/resume-cms/file",
    staticDir: "resume-cms/file",
    mimeTypes: allowedMimeTypes,
    disableLocalStorage: true
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
    afterDelete: [afterDeleteHook]
  }
};

export default File;
