import APIError from "payload/dist/errors/APIError";
import cloudinaryService from "../../../services/cloudinary.service";
import { CLOUDINARY_GROUP_NAME } from "../../../type";
import { CollectionAfterDeleteHook } from "payload/types";

const afterDeleteHook: CollectionAfterDeleteHook = async ({
  doc, // the document that was deleted
  req // full express request
}) => {
  if (!doc[CLOUDINARY_GROUP_NAME]) {
    return;
  }

  try {
    const { public_id, resource_type } = doc[CLOUDINARY_GROUP_NAME];
    await cloudinaryService.delete(public_id, resource_type);
  } catch (error) {
    console.error("Error deleting file from Cloudinary:", error);
    throw new APIError(error.message, 400);
  }
};

export default afterDeleteHook;
