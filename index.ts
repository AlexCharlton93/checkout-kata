import { CheckoutItem } from "./Interfaces/Item.interface";

export const checkout = (items: Array<CheckoutItem>) => {
    const total: Number = 0;

    if (!items) {
        throw new Error("No items provided at check out");
    }

    return {
        total
    }
}
