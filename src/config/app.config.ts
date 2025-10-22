import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

console.log("✅ Loaded .env variables:");

export const APP_CONFIG = {
  PORT: process.env.PORT || "3000",
  PHONE_NUMBER_ID: process.env.PHONE_NUMBER_ID || "",
  VERSION: process.env.VERSION || "v19.0",
  WHATSAPP_USER_ACCESS_TOKEN: process.env.WHATSAPP_USER_ACCESS_TOKEN || "",
  WEBHOOK_VERIFICATION_PASSWORD:
    process.env.WEBHOOK_VERIFICATION_PASSWORD || "",
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || "",
  MONGO_URI: process.env.MONGO_URI || "",
};
