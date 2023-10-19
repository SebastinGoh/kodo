import OrderSummary from "@/app/components/checkout/delivery/order-summary";
import DeliveryForm from '@/app/components/checkout/delivery/delivery-form';
import { useScreenStore } from "@/app/store/useScreenStore";

export default function DeliveryScreen() {
  
    const isDeliveryScreenOpen = useScreenStore(state => state.Screens.isDeliveryScreenOpen)
    
    return (
        <div className={`${
            isDeliveryScreenOpen 
            ? "flex-1 flex flex-col justify-between opacity-100 left-0" 
            : "hidden opacity-0 -left-100"
        }`}>
            <OrderSummary />
            <DeliveryForm />
        </div>
        
    );
}