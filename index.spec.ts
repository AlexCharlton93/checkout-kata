import { checkout } from "./index";

describe("checkout", () => {
    test("Should throw an error if no goods are passed to the checkout", () => {
        const items = undefined;
        expect(() => checkout(items)).rejects.toThrow("No items provided at check out");
    });

    test("Should calculate the correct total", () => {
        const input = [
            {
                sku: 'A99',
                price: 50,
                qty: 2,
            }
        ];
        const result = checkout(input);
        expect(result).toEqual({total: 100});
    });

    test("Should calculate the correct total if a special offer is applied", () => {
        const input = [
            {
                sku: 'A99',
                price: 50,
                qty: 3,
            }
        ];
        const result = checkout(input);

        // 3 for 130 special offer should be applied
        expect(result).toEqual({total: 130});
    });
});
