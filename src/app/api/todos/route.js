import clientPromise from "@/db/connectDB";
import { NextResponse } from "next/server";




export async function GET(req) {
    try {
        const client = await clientPromise;
        const db = client.db("todoDB");
        const collection = await db.collection("todos");
        const todos = await collection.find().toArray();
        return NextResponse.json(todos);
    } catch (error) {
        return NextResponse.json({
            "error": error.message
        })
    }
}