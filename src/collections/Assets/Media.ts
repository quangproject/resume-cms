import { GROUP } from "../../constants";
import { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  admin: {
    group: GROUP.ASSETS,
    useAsTitle: "altText",
  },
  upload: {
    staticURL: "/media",
    staticDir: "media",
    mimeTypes: ["image/jpeg", "image/png", "image/gif"], // Allow only image formats
    imageSizes: [
      {
        name: "small",
        width: 320,
        height: 240,
      },
      {
        name: "medium",
        width: 640,
        height: 480,
      },
      {
        name: "large",
        width: 1280,
        height: 960,
      },
    ],
    adminThumbnail: "small",
    crop: true,
    focalPoint: true,
  },
  fields: [
    {
      name: "altText",
      type: "text",
      label: "Alt Text",
    },
  ],
};

export default Media;
