import { type NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { OrderData } from '@/app/types';

export async function POST(request: NextRequest) {
    const data: OrderData = await request.json();
    data["paymentSuccess"] = false;

    const dbname = process.env.DB_NAME as string;
    const collectionName = "orders";
    const ordersCollection = (await clientPromise).db(dbname).collection(collectionName);
    
    try {
        const insertConfirmation = await ordersCollection.insertOne(data);
        const insertedId = insertConfirmation.insertedId;
        return NextResponse.json({insertedId}, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}