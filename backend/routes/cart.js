
const express = require('express');
const store = require('../store');
const router = express.Router();

router.post('/:userId/add', (req, res) => {
  const { userId } = req.params;
  const { item } = req.body;
  if (!item || !item.productId || !item.price || !item.qty) {
    return res.status(400).json({ error: 'Item { productId, price, qty } is required' });
  }

  if (!store.users[userId]) {
    return res.status(404).json({ error: 'User not found' });
  }

  store.users[userId].cart.push(item);
  res.status(200).json({ message: 'Item added to cart', cart: store.users[userId].cart });
});


router.post('/:userId/checkout', (req, res) => {
  const { userId } = req.params;
  const { discountCode } = req.body;
  const user = store.users[userId];
  if (!user) return res.status(404).json({ error: 'User not found' });

  const cart = user.cart;
  if (cart.length === 0) {
    return res.status(400).json({ error: 'Cart is empty' });
  }

  const originalTotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  let totalAmount = originalTotal;
  let discountAmount = 0;
  let usedCode;

  if (discountCode) {
    if (!store.validateDiscountCode(discountCode)) {
      return res.status(400).json({ error: 'Invalid or already used discount code' });
    }
    discountAmount = parseFloat((originalTotal * 0.1).toFixed(2));
    totalAmount = originalTotal - discountAmount;
    store.markDiscountUsed(discountCode);
    usedCode = discountCode;
  }


  const order = {
    cart: [...cart],
    originalTotal,
    discountAmount,
    totalAmount,
    discountCode: usedCode,
  };
  user.orders.push(order);
  user.cart = [];


  let newDiscountCode;
  if (user.orders.length > 0 && user.orders.length % store.nthOrder === 0) {
    newDiscountCode = store.generateDiscountCode();
    user.discountCodes.push(newDiscountCode);
  }

  return res.status(200).json({
    message: 'Order placed successfully',
    order,
    newDiscountCode,
  });
});

router.get('/:userId', (req, res) => {
  const user = store.users[req.params.userId];
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json({ cart: user.cart });
});

module.exports = router;
