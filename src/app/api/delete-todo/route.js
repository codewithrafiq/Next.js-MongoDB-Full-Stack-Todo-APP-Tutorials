import clientPromise from "@/db/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";




export async function POST(req) {
    try {
        const { id } = await req.json();
        // console.log("id--id-->", id);
        const client = await clientPromise;
        const db = client.db("todoDB");
        const collection = await db.collection("todos");
        let todo = await collection.findOne({ _id: new ObjectId(id) })

        // console.log("todo--todo-->", todo);
        if (!todo) {
            throw new Error("Todo not found");
        }
        await collection.deleteOne({ _id: new ObjectId(id) });
        return NextResponse.json({
            "success": true,
            "id": id,
            "message": "Todo deleted"
        })
    } catch (error) {
        return NextResponse.json({
            "error": error.message
        })
    }
}