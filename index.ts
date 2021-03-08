import { CheckoutItem } from "./Interfaces/Item.interface";

export const checkout = (items: Array<CheckoutItem>) => {
    let total: number = 0;

    if (!items) {
        throw new Error("No items provided at check out");
    }

    items.forEach(item => {
        total += calculateTotal(item.price, item.qty);
    });

    return {
        total
    }
}

const calculateTotal = (price: number, total: number) => {
    return price * total;
}
