export { default as swaggerConfig } from "./swagger.config.js";
import { config } from "dotenv";
config();

//NOTE: If you are running the project in an instance, you should store these secret keys in its configuration settings.
// This type of storing secret information is only experimental and for the purpose of local running.

const {
  DB_URI,
  PORT,
  JWT_SECRET_KEY,
  REFRESH_TOKEN_SECRET_KEY,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_REGION,
  BUCKET_NAME,
} = process.env;

export const port = PORT || 3000;
export const jwtSecretKey = JWT_SECRET_KEY | 'a';
export const refreshTokenSecretKey = REFRESH_TOKEN_SECRET_KEY | 'a';
export const dbUri = DB_URI | 'a';
export const awsAccessKey = AWS_ACCESS_KEY_ID | 'a';
export const awsSecretAccessKey = AWS_SECRET_ACCESS_KEY | 'a';
export const awsRegion = AWS_REGION | 'a';
export const bucketName = BUCKET_NAME | 'a';
export const prefix = "/api";
export const specs = "/docs";
