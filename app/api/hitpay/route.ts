import { type NextRequest, NextResponse } from 'next/server';
import { OrderData } from '@/app/types';

export async function POST(request: NextRequest, response: NextResponse) {
  const { firstname, email, totalPrice, insertedId } = await request.json();
  
  const options = {
    method: 'POST',
    headers: {
      'X-BUSINESS-API-KEY': process.env.KODO_HITPAY_API_KEY as string,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "name": firstname,
      "email": email,
      "amount": totalPrice,
      "currency": "SGD",
      reference_number: insertedId,
    })
  };
  
  try {
    const response = await fetch('https://api.sandbox.hit-pay.com/v1/payment-requests', options);
    const data = await response.json();
    return NextResponse.json(data as OrderData, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}