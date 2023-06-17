import clientPromise from "@/db/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";




export async function POST(req) {
    try {
        const { id, title } = await req.json();
        
        const client = await clientPromise;
        const db = client.db("todoDB");
        const collection = await db.collection("todos");
        let todo = await collection.findOne({ _id: new ObjectId(id) })

        if (!todo) {
            throw new Error("Todo not found");
        }
        await collection.updateOne(
            { _id: new ObjectId(id) },
            {
                $set: {
                    title,
                },
            }
        )
        return NextResponse.json({
            "success": true,
            "id": id,
            "message": "Todo Updated",
        })
    } catch (error) {
        return NextResponse.json({
            "error": error.message
        })
    }
}