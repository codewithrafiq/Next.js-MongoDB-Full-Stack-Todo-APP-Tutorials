import clientPromise from "@/db/connectDB";
import { NextResponse } from "next/server";




export async function POST(req) {
    try {
        const body = await req.json();
        const client = await clientPromise;
        const db = client.db("todoDB");
        const collection = db.collection("todos");
        let toto = await collection.insertOne({ ...body });
        let getTodo = await collection.findOne({ _id: toto.insertedId })
        return NextResponse.json(getTodo)
    } catch (error) {
        return NextResponse.json({
            "error": error.message
        })
    }
}