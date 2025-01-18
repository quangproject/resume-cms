import express from "express";
import payload from "payload";
import { mediaManagement } from "payload-cloudinary-plugin";
import { CollectionConfig } from "payload/types";

require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

// app.use(mediaManagement());

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    email: {
      transportOptions: {
        host: process.env.SMTP_HOST,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        },
        port: Number(process.env.SMTP_HOST),
        secure: Number(process.env.SMTP_PORT) === 465, // true for port 465, false (the default) for 587 and others
        requireTLS: true
      },
      fromName: process.env.FROM_NAME,
      fromAddress: process.env.FROM_ADDRESS,
      logMockCredentials: true
    },
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    }
  });

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};

start();
