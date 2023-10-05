
import Cart from "@/app/components/cart/cart";
import { useCartStore } from "@/app/store/useCartStore";
import useFromStore from "@/app/hooks/useFromStore";

export default function Drawer({
    setIsOpen,
}:{
    setIsOpen: (isOpen: boolean) => void;
}) {

    const isDrawerOpen = useFromStore(useCartStore, state => state.isDrawerOpen)
    const toggleDrawer = useCartStore(state => state.toggleDrawer)

    return (
        <div className="fixed w-screen h-screen overflow-hidden bg-slate-900/50 flex flex-col z-40"
        style={{
            opacity: `${isDrawerOpen ? "1" : "0"}`,
            bottom: ` ${isDrawerOpen ? "0" : "-100%"}`,
            display: ` ${isDrawerOpen ? "" : "none"}`,
        }}
        >
            <button className="flex-1" onClick={toggleDrawer}></button>
            <Cart setIsOpen={setIsOpen}/>
        </div>
        
    );
}