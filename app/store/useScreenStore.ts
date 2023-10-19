import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Screens } from "@/app/types";

interface State {
    Screens: Screens
}

interface Actions {
    activateScreen: (screen: string) => void
}

const INITIAL_STATE: State = {
    Screens: {
        isDeliveryScreenOpen: true,
        isPaymentScreenOpen: false,
        isConfirmationScreenOpen: false,
    },
}

export const useScreenStore = create(
    persist<State & Actions>(
        (set, get) => ({
            Screens: INITIAL_STATE.Screens,

            // activate selected screen and deactivate others
            activateScreen: (screen: string) => {
                switch (screen) {
                    case "reset":
                        set((state: State) => ({
                            ...state,
                            Screens: {
                                ...{ isDeliveryScreenOpen: true,
                                    isPaymentScreenOpen: false,
                                    isConfirmationScreenOpen: false,
                                },
                            },
                        }));
                        break;
                    case "payment":
                        set((state: State) => ({
                            ...state,
                            Screens: {
                                ...{ isDeliveryScreenOpen: false,
                                    isPaymentScreenOpen: true,
                                    isConfirmationScreenOpen: false,
                                },
                            },
                        }));
                        break;
                    case "confirmation":
                        set((state: State) => ({
                            ...state,
                            Screens: {
                                ...{ isDeliveryScreenOpen: false,
                                    isPaymentScreenOpen: false,
                                    isConfirmationScreenOpen: true,
                                },
                            },
                        }));
                        break;
                }
            }
        }),
        {
            name: "screen-storage",
            getStorage: () => localStorage,
        }
    )
)