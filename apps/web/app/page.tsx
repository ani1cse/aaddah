"use client";
import { useEffect, useState } from "react";
import { ApiClient, Product } from "@aaddah/shared";
import { hello } from "@aaddah/shared";
const api = new ApiClient(process.env.NEXT_PUBLIC_API_URL!);


export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartId, setCartId] = useState<string | null>(null);

  useEffect(() => {
    api.listProducts().then(setProducts);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/carts`, { method: "POST" })
      .then(r => r.json())
      .then(c => setCartId(c.id));
  }, []);

  const add = async (id: string) => {
    if (!cartId) return;
    await api.addToCart(cartId, id, 1);
    alert("Added to cart");
  };

  return (
     
    <main style={{ maxWidth: 900, margin: "30px auto" }}>
      <h1>Store</h1>
      <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
        {products.map(p => (
          <li key={p.id} style={{ border: "1px solid #eee", padding: 12 }}>
            <h3>{p.title}</h3>
            <p>{(p.price / 100).toFixed(2)} {p.currency}</p>
            <button onClick={() => add(p.id)}>Add to cart</button>
          </li>
        ))}
      </ul>   
      <h1>{hello()}</h1>   
    </main>
  );
}