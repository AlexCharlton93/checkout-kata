import { checkout } from './index';

const invokeCheckout = () => {
    try {
        console.log(checkout([
            {
                sku: 'A99',
                price: 50,
                qty: 2,
            }
        ]));
    } catch (e) {
        console.log(e.message);
    }
}

invokeCheckout();
