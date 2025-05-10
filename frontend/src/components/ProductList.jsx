import React from 'react';
import axios from 'axios';

const PRODUCTS = [
  { productId: 'p1', name: 'Product-1', price: 100, qty: 1 },
  { productId: 'p2', name: 'Product-2', price: 50, qty: 1 },
];

export default function ProductList({ onAdd }) {
  const addToCart = async (product) => {
    await axios.post(`http://localhost:4000/cart/demo/add`, { item: product });
    onAdd(product);
  };

  return (
    <div className="mb-4">
      <h2 className="font-semibold">Products</h2>
      {PRODUCTS.map((p) => (
        <div key={p.productId} className="flex justify-between my-2">
          <span>{p.name} — ₹{p.price}</span>
          <button
            className="px-2 py-1 bg-blue-500 text-white rounded"
            onClick={() => addToCart(p)}
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
}
