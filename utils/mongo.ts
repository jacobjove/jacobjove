import { Document, MongoClient } from "mongodb";

if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI environment variable is not set.");
}

const uri = process.env.MONGO_URI as string;
const options = {};

let client;
let mongoClientPromise: Promise<MongoClient>;

const REQUIRED_ENV_VARS = ["MONGO_URI", "MONGO_DB"];
for (const envVar of REQUIRED_ENV_VARS) {
  if (!process.env[envVar]) {
    throw new Error(`${envVar} environment variable is not set.`);
  }
}

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  mongoClientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  mongoClientPromise = client.connect();
}

// Export a module-scoped MongoClient promise so that the client
// can be shared across functions.
export default mongoClientPromise;

export const getDb = async (_client?: MongoClient) => {
  const client = _client || (await mongoClientPromise);
  return client.db(process.env.MONGO_DB);
};

const serializeDocument = (document: Document) => {
  document._id = document._id.toString();
  return document;
};

export const serialize = (data: Document | Document[]) => {
  if (Array.isArray(data)) {
    return data.map((doc) => serializeDocument(doc));
  }
  return serializeDocument(data);
};
