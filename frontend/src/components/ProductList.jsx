import React from 'react';
  import axios from 'axios';
  
  const PRODUCTS = [
    { productId: 'p1', name: 'Widget', price: 100 },
    { productId: 'p2', name: 'Gadget', price: 50 }
  ];
  
  export default function ProductList({ onAdd }) {
    const addToCart = async (p) => {
      const res = await axios.post(`http://localhost:3000/cart/demo/add`, { ...p, qty: 1 });
      onAdd(p);
    };
    return (
      <div className="mb-4">
        <h2 className="font-semibold">Products</h2>
        {PRODUCTS.map(p => (
          <div key={p.productId} className="flex justify-between my-2">
            <span>{p.name} - ₹{p.price}</span>
            <button className="px-2 py-1 bg-blue-500 text-white rounded" onClick={() => addToCart(p)}>Add</button>
          </div>
        ))}
      </div>
    );
  }