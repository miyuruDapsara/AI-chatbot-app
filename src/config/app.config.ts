import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || "3000";
const PHONE_NUMBER_ID = process.env.PHONE_NUMBER_ID ;
const VERSION = process.env.VERSION ;
const WHATSAPP_USER_ACCESS_TOKEN = process.env.WHATSAPP_USER_ACCESS_TOKEN ;
const WEBHOOK_VERIFICATION_PASSWORD = process.env.WEBHOOK_VERIFICATION_KEY; ;


export const APP_CONFIG = {
  PORT,
  PHONE_NUMBER_ID,
  VERSION,
  WEBHOOK_VERIFICATION_PASSWORD,
  WHATSAPP_USER_ACCESS_TOKEN,
};
