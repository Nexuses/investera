import { MongoClient, type Db } from "mongodb";

const globalForMongo = globalThis as unknown as {
  mongoClientPromise?: Promise<MongoClient>;
};

/**
 * Returns the website database, or null when MONGODB_URI is not configured.
 * The client is cached on globalThis so warm serverless invocations reuse it.
 */
export async function getDb(): Promise<Db | null> {
  const uri = process.env.MONGODB_URI?.trim();
  if (!uri) {
    return null;
  }

  if (!globalForMongo.mongoClientPromise) {
    globalForMongo.mongoClientPromise = new MongoClient(uri, {
      serverSelectionTimeoutMS: 8_000,
    })
      .connect()
      .catch((error) => {
        globalForMongo.mongoClientPromise = undefined;
        throw error;
      });
  }

  const client = await globalForMongo.mongoClientPromise;
  return client.db(process.env.MONGODB_DB?.trim() || "investera");
}
