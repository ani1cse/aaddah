export class ApiClient {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    async listProducts(q) {
        const url = new URL(`${this.baseUrl}/products`);
        if (q)
            url.searchParams.set("q", q);
        return fetch(url).then(r => r.json());
    }
    async addToCart(cartId, productId, quantity) {
        return fetch(`${this.baseUrl}/carts/${cartId}/items`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ productId, quantity })
        }).then(r => r.json());
    }
}
