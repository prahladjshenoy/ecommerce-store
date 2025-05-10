# 🛒 Ecommerce Store (with Discounts)

This project is a basic ecommerce backend and frontend application built with **Node.js (Express)** and **React**. It supports:

- Adding items to cart
- Checkout functionality
- Discount code system (every nth order gets a 10% coupon)
- Admin APIs to track orders and discount usage

---

## 📦 Features

### Customer:
- Add items to cart
- Checkout with or without a discount code
- Earn a 10% discount code every 5th order

### Admin:
- Generate discount code for every nth order
- View stats: total items purchased, amount spent, and used discount codes

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express (in-memory store)
- **Frontend:** React + Axios
- **Testing:** Jest, Supertest

---

## 🚀 Getting Started

### Clone the repository



```bash
git clone https://github.com/your-username/ecommerce-store.git
cd ecommerce-store
```
---
## 🖥 Backend

Setup

```bash
cd backend
npm install
#Run the server
npm run start
# or use another port if 3000 is busy
PORT=4000 npm run start

```

---
## 🧑‍🎨 Frontend

Setup

```bash
cd frontend
npm install
# Run the frontend

npm run start
#By default, it runs on port 3000. Ensure backend is running on a different port, e.g. 4000.
```

---
