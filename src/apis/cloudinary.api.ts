import axiosClient from "./axiosClient";

class CloudinaryAPI {
  upload(formData: FormData): Promise<any> {
    return axiosClient({
      url: "/cloudinary/upload",
      method: "POST",
      baseURL: process.env.GATEWAY_URL,
      data: formData,
      auth: {
        username: process.env.CLOUDINARY_SERVICE_BASIC_AUTH_USERNAME,
        password: process.env.CLOUDINARY_SERVICE_BASIC_AUTH_PASSWORD
      }
    });
  }

  delete(publicId: string, resourceType: string): Promise<any> {
    return axiosClient({
      url: "/cloudinary/delete",
      method: "POST",
      baseURL: process.env.GATEWAY_URL,
      data: {
        publicId,
        resourceType
      },
      auth: {
        username: process.env.CLOUDINARY_SERVICE_BASIC_AUTH_USERNAME,
        password: process.env.CLOUDINARY_SERVICE_BASIC_AUTH_PASSWORD
      }
    });
  }
}

export default new CloudinaryAPI();
