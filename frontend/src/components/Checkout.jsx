import React, { useState } from 'react';
import axios from 'axios';

export default function Checkout({ items, onOrder }) {
  const [code, setCode] = useState('');
  const placeOrder = async () => {
    const body = {};
    if (code) body.discountCode = code;
    const res = await axios.post(`http://localhost:3000/cart/demo/checkout`, body);
    onOrder(res.data);
  };
  return (
    <div>
      <h2 className="font-semibold">Checkout</h2>
      <input
        className="border p-1 mr-2"
        placeholder="Coupon code"
        value={code}
        onChange={e => setCode(e.target.value)}
      />
      <button className="px-2 py-1 bg-green-500 text-white rounded" onClick={placeOrder} disabled={!items.length}>Buy</button>
    </div>
  );
}