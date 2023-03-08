import {create} from "zustand";
import {Store} from "@/modules/order/store/types";

const useOrder = create<Store>(set => ({
    order: [],
    setOder: order => set({ order }),
}));

export default useOrder;
