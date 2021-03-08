import { checkout } from './index';

const invokeCheckout = () => {
    try {
        console.log(checkout([
            {
                sku: 'A99',
                quantity: 2,
            }
        ]));
    } catch (e) {
        console.log(e);
    }
}

invokeCheckout();
