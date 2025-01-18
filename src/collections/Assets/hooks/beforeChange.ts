import payload from "payload";
import { CollectionBeforeChangeHook } from "payload/types";
import APIError from "payload/dist/errors/APIError";
import cloudinaryService from "../../../services/cloudinary.service";
import { CLOUDINARY_GROUP_NAME } from "../../../type";

const beforeChangeHook: CollectionBeforeChangeHook = async ({
  data, // incoming data to update or create with
  req, // full express request
  operation, // name of the operation ie. 'create', 'update'
  originalDoc // original document
}) => {
  try {
    const file = req.files.file;
    const collectionConfig = req.collection?.config;
    const { mimeType, filename } = data;

    if (!(file && filename)) {
      return;
    }

    const uploadData = await cloudinaryService.upload(
      filename,
      mimeType,
      file.data,
      payload,
      collectionConfig
    );

    const result = {
      ...data,
      [CLOUDINARY_GROUP_NAME]: uploadData
    };

    return result;
  } catch (error) {
    console.error("🚀 ~ error:", error);
    throw new APIError(error.message, 400);
  }
};

export default beforeChangeHook;
