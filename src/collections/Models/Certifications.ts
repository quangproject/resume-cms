import { GROUP } from "../../constants";
import { CollectionConfig } from "payload/types";

const Certifications: CollectionConfig = {
  slug: "certifications",
  admin: {
    group: GROUP.MODELS,
    useAsTitle: "certificationName",
  },
  fields: [
    {
      name: "person",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    {
      name: "certificationName",
      type: "text",
      required: true,
    },
    {
      name: "issuingOrganization",
      type: "text",
    },
    {
      name: "issueDate",
      type: "date",
    },
    {
      name: "expirationDate",
      type: "date",
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "certificateLink",
      type: "text",
    },
  ],
};

export default Certifications;
