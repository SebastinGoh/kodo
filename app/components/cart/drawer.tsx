
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

    const closeAll = () => {
        setIsOpen(false);
        useCartStore.setState({isDrawerOpen: false});
    };
    return (
        <div className="fixed w-screen h-screen overflow-hidden bg-slate-900/50 flex flex-col z-40"
        style={{
            opacity: `${isDrawerOpen ? "1" : "0"}`,
            bottom: ` ${isDrawerOpen ? "0" : "-100%"}`,
            display: ` ${isDrawerOpen ? "" : "none"}`,
        }}
        >
            <button className="flex-1" onClick={toggleDrawer}></button>
            <div className="bg-orange rounded-t-lg shadow-lg h-content flex-initial">
                <div className="flex">
                    <Cart closeAll={closeAll}/>
                </div>
            </div>
        </div>
        
    );
}