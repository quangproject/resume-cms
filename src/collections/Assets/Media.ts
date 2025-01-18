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
    imageSizes: [
      {
        name: "small",
        width: 320,
        height: 240
      },
      {
        name: "medium",
        width: 640,
        height: 480
      },
      {
        name: "large",
        width: 1280,
        height: 960
      }
    ],
    adminThumbnail: "small",
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
    afterDelete: [afterDeleteHook]
  }
};

export default Media;
