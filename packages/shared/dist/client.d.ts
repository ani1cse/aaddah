export declare class ApiClient {
    private baseUrl;
    constructor(baseUrl: string);
    listProducts(q?: string): Promise<any>;
    addToCart(cartId: string, productId: string, quantity: number): Promise<any>;
}
//# sourceMappingURL=client.d.ts.map