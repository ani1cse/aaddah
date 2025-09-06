export class ApiClient {
  constructor(private baseUrl: string) {}
  async listProducts(q?: string) {
    const url = new URL(`${this.baseUrl}/products`);
    if (q) url.searchParams.set("q", q);
    return fetch(url).then(r => r.json());
  }
  async addToCart(cartId: string, productId: string, quantity: number) {
    return fetch(`${this.baseUrl}/carts/${cartId}/items`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId, quantity })
    }).then(r => r.json());
  }
}