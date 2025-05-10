import React from 'react';

export default function OrderSummary({ order }) {
  const { order: ord, newDiscountCode } = order;

  return (
    <div className="bg-gray-100 p-4 rounded mt-4">
      <h2 className="font-semibold">✅ Order Summary</h2>
      <p>Total: ₹{ord.originalTotal}</p>
      {ord.discountCode && (
        <>
          <p>Discount Code: {ord.discountCode}</p>
          <p>Discount: ₹{ord.discountAmount}</p>
        </>
      )}
      <p><strong>Final Paid: ₹{ord.totalAmount}</strong></p>
      {newDiscountCode && (
        <p className="mt-2 text-green-700">
          🎉 You've earned a new discount code: <strong>{newDiscountCode}</strong>
        </p>
      )}
    </div>
  );
}
