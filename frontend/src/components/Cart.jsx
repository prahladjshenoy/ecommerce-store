import React from 'react';
export default function Cart({ items }) {
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  return (
    <div className="mb-4">
      <h2 className="font-semibold">Cart</h2>
      {items.length === 0 && <div>No items</div>}
      {items.map((i, idx) => (
        <div key={idx} className="flex justify-between">
          <span>{i.name} x{i.qty}</span><span>₹{i.price * i.qty}</span>
        </div>
      ))}
      <div className="font-bold mt-2">Total: ₹{total}</div>
    </div>
  );
}