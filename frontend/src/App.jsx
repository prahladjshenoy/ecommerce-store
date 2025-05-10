import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [orderResponse, setOrderResponse] = useState(null);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Ecommerce Demo</h1>
      <ProductList onAdd={(item) => setCartItems([...cartItems, item])} />
      <Cart items={cartItems} />
      <Checkout items={cartItems} onOrder={(res) => { setOrderResponse(res); setCartItems([]); }} />
      {orderResponse && <pre className="mt-4 p-2 bg-gray-100">{JSON.stringify(orderResponse, null, 2)}</pre>}
    </div>
  );
}