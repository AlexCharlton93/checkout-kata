export interface CheckoutItem {
    sku: string;
    price: number;
    qty: number;
}

export interface ItemPromotion {
    sku: string;
    qty: number;
    promotion: string;
}
