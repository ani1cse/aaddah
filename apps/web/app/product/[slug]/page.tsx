// apps/web/app/product/[slug]/page.tsx
"use client";
import { useEffect, useState } from "react";
import { Product } from "@aaddah/shared";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?slug=${params.slug}`)
      .then(r => r.json())
      .then(p => setProduct(p[0]));
  }, [params.slug]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>{product.title}</h1>
      <p>{(product.price / 100).toFixed(2)} {product.currency}</p>
      <p>{product.description}</p>
    </div>
  );
}