import { MongoClient } from "mongodb";

if (!process.env.NEXT_PUBLIC_MONGODB_URI) {
    throw new Error('Invalid environment variable: "NEXT_PUBLIC_MONGODB_URI"');
}
const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
const options = {};

let client = new MongoClient(uri, options);
let clientPromise = client.connect();

export default clientPromise;