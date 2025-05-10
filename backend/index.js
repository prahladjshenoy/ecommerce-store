// backend/index.js
const express = require('express');
const cors = require('cors');
const cartRoutes = require('./routes/cart');
const adminRoutes = require('./routes/admin');
const store = require('./store');

const app = express();
app.use(cors());
app.use(express.json());

// Seed a demo user
store.users['demo'] = { cart: [], orders: [], discountCodes: [] };

app.use('/cart', cartRoutes);
app.use('/admin', adminRoutes);

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
