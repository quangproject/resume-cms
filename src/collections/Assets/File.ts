import { GROUP } from "../../constants";
import { CollectionConfig } from "payload/types";

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
    mimeTypes: ["application/pdf"] // Allow only image formats
  },
  fields: [
    {
      name: "altText",
      type: "text",
      label: "Alt Text"
    }
  ]
};

export default File;
