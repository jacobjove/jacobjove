import mongoose from "mongoose";

const MONGODB_HOST = process.env.MONGODB_HOST ?? "localhost";
const MONGODB_DB = process.env.MONGO_INITDB_DATABASE ?? "test";
const MONGO_PORT = process.env.MONGO_PORT ?? "27017";

const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;

if (!MONGO_USERNAME) console.error("MONGODB_USERNAME is not set.");
if (!MONGO_PASSWORD) console.error("MONGODB_PASSWORD is not set.");

const MONGODB_CREDENTIALS =
  MONGO_USERNAME && MONGO_PASSWORD
    ? `${MONGO_USERNAME}:${MONGO_PASSWORD}`
    : MONGO_USERNAME
    ? MONGO_USERNAME
    : "";
const MONGODB_HOST_WITH_CREDENTIALS = [MONGODB_CREDENTIALS, MONGODB_HOST].join("@");
const MONGODB_URI = `mongodb://${MONGODB_HOST_WITH_CREDENTIALS}:${MONGO_PORT}/${MONGODB_DB}`;

declare const global: NodeJS.Global & { _mongoosePromise?: Promise<typeof mongoose> };

let mongoosePromise: Promise<typeof mongoose>;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoosePromise) {
    global._mongoosePromise = mongoose.connect(MONGODB_URI);
    console.log("Connected mongo client.");
  }
  mongoosePromise = global._mongoosePromise;
} else {
  mongoosePromise = mongoose.connect(MONGODB_URI);
}

// Export a module-scoped mongoose promise so that the client can be shared.
export default mongoosePromise;
