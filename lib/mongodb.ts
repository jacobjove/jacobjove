// import { MongoClient, MongoClientOptions } from "mongodb";
import mongoose from "mongoose";

const MONGODB_HOST = process.env.MONGODB_HOST ?? "localhost";
const [MONGODB_USERNAME, MONGODB_PASSWORD] = [
  process.env.MONGO_INITDB_ROOT_USERNAME,
  process.env.MONGO_INITDB_ROOT_PASSWORD,
];
const MONGODB_CREDENTIALS =
  MONGODB_USERNAME && MONGODB_PASSWORD
    ? `${MONGODB_USERNAME}:${MONGODB_PASSWORD}`
    : MONGODB_USERNAME
    ? MONGODB_USERNAME
    : "";
const MONGODB_URI = `mongodb://${MONGODB_CREDENTIALS}${
  MONGODB_CREDENTIALS ? "@" : ""
}${MONGODB_HOST}:27017/db`;

declare const global: NodeJS.Global & { _mongoosePromise?: Promise<typeof mongoose> };

// const options: MongoClientOptions = {};

let mongoosePromise: Promise<typeof mongoose>;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoosePromise) {
    // mongoClient = new MongoClient(MONGODB_URI, options);
    // global._mongoosePromise = mongoClient.connect();
    global._mongoosePromise = mongoose.connect(MONGODB_URI);

    console.error(">>> Connected mongo client");
  }
  mongoosePromise = global._mongoosePromise;
} else {
  // In production mode, it's best to not use a global variable.
  mongoosePromise = mongoose.connect(MONGODB_URI);
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default mongoosePromise;
