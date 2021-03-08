import { CheckoutItem } from "./Interfaces/Item.interface";

const specialOffers = [
    {
        sku: 'A99',
        qty: 3,
        price: 130,
    },
    {
        sku: 'B15',
        qty: 2,
        price: 45,
    }
]

export const checkout = (items: Array<CheckoutItem>) => {
    let total: number = 0;

    if (!items) {
        throw new Error("No items provided at check out");
    }

    items.forEach(item => {
        let specialOffer = checkForSpecialOffer(item.sku);

        if (!specialOffer) {
            total += calculateTotal(item.price, item.qty);
        }
    });

    return {
        total
    }
}

const calculateTotal = (price: number, total: number) => {
    return price * total;
}

const checkForSpecialOffer = (sku: string) => {
    return specialOffers.find(specialOffer => specialOffer.sku === sku);
}
