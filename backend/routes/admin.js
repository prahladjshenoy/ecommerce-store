// backend/routes/admin.js
const express = require('express');
const store = require('../store');
const router = express.Router();

// Manually generate a code
// POST /admin/generate-code
router.post('/generate-code', (req, res) => {
  const code = store.generateDiscountCode();
  res.json({ message: 'Discount code generated', code });
});

// View stats
// GET /admin/stats
router.get('/stats', (req, res) => {
  res.json(store.getStats());
});

module.exports = router;
