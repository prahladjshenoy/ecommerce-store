import React from 'react';

export default function Cart({ items }) {
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  return (
    <div className="mb-4">
      <h2 className="font-semibold">Cart</h2>
      {items.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>
              {item.name} — ₹{item.price} × {item.qty}
            </li>
          ))}
        </ul>
      )}
      <p className="mt-2 font-semibold">Total: ₹{total}</p>
    </div>
  );
}
