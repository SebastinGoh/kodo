import { create } from "zustand";

import { Screens } from "@/app/types";

interface State {
    Screens: Screens
}

interface Actions {
    activateScreen: (screen: string) => void
    setIsPaymentLoading: (isLoading: boolean) => void
}

const INITIAL_STATE: State = {
    Screens: {
        isDeliveryScreenOpen: true,
        isPaymentScreenOpen: false,
        isConfirmationScreenOpen: false,
        isPaymentLoading: false,
    },
}

export const useScreenStore = create<State & Actions>(set => ({
    Screens: INITIAL_STATE.Screens,

    // activate selected screen and deactivate others
    activateScreen: (screen:string = "reset") => {
        let newIsDeliveryScreenOpen:boolean, newIsPaymentScreenOpen:boolean, newIsConfirmationScreenOpen:boolean = false;
        switch (screen) {
            case "reset":
                newIsDeliveryScreenOpen = true;
                break;
            case "payment":
                newIsPaymentScreenOpen = true;
                break;
            case "confirmation":
                newIsConfirmationScreenOpen = true;
                break;
        }
        set((state: State) => ({
            ...state,
            Screens: {
                ...state.Screens,
                ...{ isDeliveryScreenOpen: newIsDeliveryScreenOpen,
                    isPaymentScreenOpen: newIsPaymentScreenOpen,
                    isConfirmationScreenOpen: newIsConfirmationScreenOpen,
                },
            },
        }));
    },
    setIsPaymentLoading: (isLoading: boolean) => {
        set((state: State) => ({
            ...state,
            Screens: {
                ...state.Screens,
                isPaymentLoading: isLoading,
            },
        }));
    },
}));