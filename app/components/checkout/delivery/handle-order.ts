import { OrderData } from "@/app/types";

export async function generatePaymentUrl(data:OrderData) {
    try {
        const orderPromise = createOrder(data);
        const order = await orderPromise;
        if (!order.insertedId) {
            return { status:500, message:"Database Error: Order ID not found" };
        }
        data["insertedId"] = order.insertedId.toString();
    } catch (err) {
        if (err instanceof Error) {
            return { status:500, message:"Database Error: " + err.message };
        }
        return { status:500, message:"Database Error: " + err };
    }
    
    try {
        const paymentPromise = createPayment(data);
        const payment = await paymentPromise;
        if (!payment.url) {
            return { status:500, message:"Payment Gateway Error: " + payment.message };
        }
        return { status:200, paymentUrl: payment.url };
    } catch (err) {
        if (err instanceof Error) {
            return { status:500, message:"Payment Gateway Error: " + err.message };
        }
        return { status:500, message:"Payment Gateway Error: " + err };
    }
}

function createOrder(data:OrderData) {
    const createOrder = '/api/create-order';

    const orderPromise = fetch(createOrder, {
        method: 'POST',
        body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err;
    });
    return orderPromise;
}

function createPayment(data:OrderData) {
    const createPayment = '/api/hitpay';

    const paymentPromise = fetch(createPayment, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((response) => {
        return response;
    })
    .catch((err) => {
        return err;
    });
    return paymentPromise;
}