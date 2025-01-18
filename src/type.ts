export const CLOUDINARY_GROUP_NAME = "cloudinary";

export const CLOUDINARY_GROUP_FIELDS = [
  {
    name: "public_id",
    label: "Public ID",
    type: "text",
    admin: { readOnly: true }
  },
  {
    name: "original_filename",
    label: "Original Filename",
    type: "text",
    admin: { readOnly: true }
  },
  {
    name: "format",
    type: "text",
    admin: { readOnly: true }
  },
  {
    name: "secure_url",
    label: "URL",
    type: "text",
    admin: { readOnly: true }
  },
  {
    name: "resource_type",
    label: "Resource Type",
    type: "text",
    admin: { readOnly: true }
  }
];
