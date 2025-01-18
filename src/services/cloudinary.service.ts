import { Payload } from "payload";
import { promises as fs } from "fs";
import path from "path";
import { SanitizedCollectionConfig } from "payload/types";
import cloudinaryApi from "../apis/cloudinary.api";

class CloudinaryService {
  async upload(
    filename: string,
    mimeType: string,
    buffer: Buffer,
    payload: Payload,
    collectionConfig?: SanitizedCollectionConfig
  ) {
    const { staticDir, staticURL } = collectionConfig?.upload || {};

    if (!staticURL) {
      throw new Error("Static URL is required for folder path");
    }

    const staticPath = path.resolve(payload.config.paths.configDir, staticDir);
    await fs.mkdir(staticPath, { recursive: true });

    const tmpFileName = path.join(
      staticPath,
      `${new Date().getTime()}_${filename}`
    );

    await fs.writeFile(tmpFileName, buffer);

    try {
      // Read the temporary file
      const fileBuffer = await fs.readFile(tmpFileName);
      const fileBlob = new Blob([fileBuffer], { type: mimeType });

      const formData = new FormData();
      formData.append("file", fileBlob, filename); // Include filename for better identification
      formData.append("folder", staticURL);
      formData.append("resourceType", "raw");

      // Upload the file to Cloudinary
      const uploadData = await cloudinaryApi.upload(formData);

      return uploadData.data;
    } catch (error) {
      console.error("Error during file upload:", error);
      throw new Error("File upload to Cloudinary failed");
    } finally {
      // Cleanup temporary file
      try {
        await fs.rm(tmpFileName);
      } catch (cleanupError) {
        console.error("Error during cleanup of temporary file:", cleanupError);
      }
    }
  }

  async delete(publicId: string, resourceType: string) {
    return cloudinaryApi.delete(publicId, resourceType);
  }
}

export default new CloudinaryService();
