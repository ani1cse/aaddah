export type Currency = "USD" | "BDT";
export interface Product {
    id: string;
    title: string;
    slug: string;
    description?: string;
    price: number;
    currency: Currency;
    imageUrl?: string;
}
export interface CartItem {
    productId: string;
    quantity: number;
}
export interface Cart {
    id: string;
    items: CartItem[];
    subtotal: number;
    currency: Currency;
}
export interface Order {
    id: string;
    cartId: string;
    total: number;
    currency: Currency;
    status: "pending" | "paid" | "failed";
}
//# sourceMappingURL=types.d.ts.map