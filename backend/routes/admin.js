
const express = require('express');
const store = require('../store');
const router = express.Router();

router.post('/generate-code', (req, res) => {
  const code = store.generateDiscountCode();
  res.json({ message: 'Discount code generated', code });
});


router.get('/stats', (req, res) => {
  res.json(store.getStats());
});

module.exports = router;
