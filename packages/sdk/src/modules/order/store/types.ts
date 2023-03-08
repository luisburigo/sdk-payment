import {Order} from "@/modules/order/types";

export interface Store {
    order: Order;
    setOder: (order: Order) => void;
}