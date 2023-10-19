import BackArrow from "@/app/components/checkout/back-arrow";
import PageTitle from "@/app/components/page-title";
import ProgressBar from "@/app/components/checkout/progress-bar";
import DeliveryScreen from "@/app/components/checkout/delivery/delivery-screen";
import PaymentScreen from "@/app/components/checkout/payment-screen";
import ConfirmationScreen from "@/app/components/checkout/confirmation-screen";

export default function Checkout() {

    return (
        <section className="bg-pink text-lg w-full h-full flex flex-col items-center justify-center gap-4 pt-6">
            <div className="w-full flex justify-center">
                <PageTitle title="Checkout" />
            </div>
            <BackArrow />
            <ProgressBar />
            <DeliveryScreen />
            <PaymentScreen />
            <ConfirmationScreen />
        </section>
    )
};