import React, { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderSummary from './components/OrderSummary';
import axios from 'axios';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [order, setOrder] = useState(null);

  const refreshCart = async () => {
    const res = await axios.get('http://localhost:4000/cart/demo');
    setCartItems(res.data.cart);
  };

  useEffect(() => {
    refreshCart();
  }, []);

  const handleAdd = () => refreshCart();
  const handleOrder = (orderResult) => {
    setOrder(orderResult);
    refreshCart();
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">🛒 My Store</h1>
      <ProductList onAdd={handleAdd} />
      <Cart items={cartItems} />
      <Checkout items={cartItems} onOrder={handleOrder} />
      {order && <OrderSummary order={order} />}
    </div>
  );
}

export default App;
