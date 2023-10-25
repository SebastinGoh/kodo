import { OrderData } from "@/app/types";

export async function handleOrder(data:OrderData) {
    const orderPromise = createOrder(data);
    const order = await orderPromise;
    data["insertedId"] = order.insertedId.toString();
    
    const paymentPromise = createPayment(data);
    const payment = await paymentPromise;
    return payment.url;
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
        alert("Error making order in MongoDB: " + err.message);
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
        alert("Error making payment in HitPay: " + err.message);
    });
    return paymentPromise;
}