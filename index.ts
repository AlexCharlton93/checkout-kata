import { CheckoutItem } from "./Interfaces/Item.interface";
import { specialOffers } from "./data/specialOffers";

export const checkout = (items: Array<CheckoutItem>) => {
    let total: number = 0;

    if (!items) {
        return new Promise((_, reject) => { 
            reject("No items provided at check out");
        });
    }

    items.forEach(item => {
        let specialOffer = checkForSpecialOffer(item.sku, item.qty);

        if (!specialOffer) {
            total += calculateTotal(item.price, item.qty);
        } else {
            total += specialOffer.price;
        }
    });

    return {
        total
    }
}

const calculateTotal = (price: number, total: number) => {
    return price * total;
}

const checkForSpecialOffer = (sku: string, qty: number) => {
    return specialOffers.find(specialOffer => specialOffer.sku == sku && qty >= specialOffer.qty);
}
