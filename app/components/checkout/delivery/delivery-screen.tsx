import OrderSummary from "@/app/components/checkout/delivery/order-summary";
import DeliveryForm from '@/app/components/checkout/delivery/delivery-form';

export default function DeliveryScreen() {
  
    
    return (
        <div className="flex-1 flex flex-col justify-between opacity-100 left-0" >
            <OrderSummary />
            <DeliveryForm />
        </div>
        
    );
}