import { GROUP } from "../../constants";
import { CollectionConfig } from "payload/types";

const SLUG = "educations";

const Education: CollectionConfig = {
  slug: SLUG,
  admin: {
    group: GROUP.MODELS,
    useAsTitle: "institutionName"
  },
  fields: [
    {
      name: "person",
      type: "relationship",
      relationTo: "users",
      required: true
    },
    {
      type: "row",
      fields: [
        {
          name: "institutionName",
          type: "text",
          required: true
        },
        {
          name: "degree",
          type: "text",
          required: true
        }
      ]
    },
    {
      name: "fieldOfStudy",
      type: "text",
      required: true
    },
    {
      type: "row",
      fields: [
        {
          name: "startDate",
          type: "date",
          admin: {
            date: {
              pickerAppearance: "monthOnly",
              displayFormat: "MMMM yyyy"
            }
          },
          required: true
        },
        {
          name: "endDate",
          type: "date",
          admin: {
            date: {
              pickerAppearance: "monthOnly",
              displayFormat: "MMMM yyyy"
            }
          }
        }
      ]
    },
    {
      name: "description",
      type: "richText",
      required: true
    }
  ],
  endpoints: [
    {
      path: "/:id/user",
      method: "get",
      handler: async (req, res, next) => {
        const userId = req.params.id;
        const educations = await req.payload.find({
          collection: SLUG,
          where: {
            person: {
              equals: userId
            }
          }
        });

        return res.status(200).send(educations);
      }
    }
  ]
};

export default Education;
