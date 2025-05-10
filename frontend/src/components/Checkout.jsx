import React, { useState } from 'react';
import axios from 'axios';

export default function Checkout({ items, onOrder }) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const placeOrder = async () => {
    try {
      const payload = code.trim() ? { discountCode: code.trim() } : {};
      const res = await axios.post(`http://localhost:4000/cart/demo/checkout`, payload);
      onOrder(res.data);
      setCode('');
      setError('');
    } catch (err) {
      setError(err.response?.data?.error || 'Checkout failed');
    }
  };

  return (
    <div className="mb-4">
      <h2 className="font-semibold">Checkout</h2>
      <input
        className="border p-1 mr-2"
        placeholder="Coupon code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button
        className="px-2 py-1 bg-green-500 text-white rounded"
        onClick={placeOrder}
        disabled={items.length === 0}
      >
        Buy
      </button>
      {error && <p className="text-red-500 mt-1">{error}</p>}
    </div>
  );
}
