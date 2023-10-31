import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { createHmac } from 'crypto';
import { URLSearchParams } from 'url';
import { ObjectId } from 'mongodb';

const secret = process.env.KODO_HITPAY_SECRET as string;

function generateSignatureArray(secret: string, vals: string): string {
    const hmac = createHmac("sha256", secret);
    const signed = hmac.update(Buffer.from(vals, "utf-8")).digest("hex");
    return signed;
}

export async function POST(request: NextRequest) {
    if (request.body == null) {
        return NextResponse.json({ error: "No body" }, { status: 500 });
    }
    const data = new URLSearchParams(await new Response(request.body).text());
    const hmac = data.get("hmac") as string;
    const reference_number = data.get("reference_number") as string;
    data.delete("hmac");
    data.sort();
    const check = data.toString().replace(/[$=&]/g, "");
    const signed = generateSignatureArray(secret, check);
    
    if (signed !== hmac) {
        return NextResponse.json({ error: "HMAC mismatch" }, { status: 500 });
    }

    const filter = { _id: new ObjectId(reference_number) };
    const update = { $set: { paymentSuccess: true } };

    const dbname = process.env.DB_NAME as string;
    const collectionName = "orders";
    const ordersCollection = (await clientPromise).db(dbname).collection(collectionName);

    try {
        const updateConfirmation = await ordersCollection.updateOne(filter, update);
        if (updateConfirmation.modifiedCount === 0) {
            return NextResponse.json({ error: "No order found" }, { status: 500 });
        }
        
        return NextResponse.json(updateConfirmation, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}