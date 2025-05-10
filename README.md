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

### Setup

```bash
cd backend
npm install
#Run the server
npm run start
# or use another port if 3000 is busy
PORT=4000 npm run start
```
### Test

```bash

npm test

```

---
## 🧑‍🎨 Frontend

### Setup

```bash
cd frontend
npm install
# Run the frontend

npm run start
#By default, it runs on port 3000. Ensure backend is running on a different port, e.g. 4000.
```

---

## 📸 Screenshots

### Few snap of Produt funtionality 
Landing page

![image](https://github.com/user-attachments/assets/fab2a3ae-6708-487a-b0b9-71510626a2a8)


Add product and try to apply invalid code (negative case)

![image](https://github.com/user-attachments/assets/6357e788-c6f8-4263-9196-b993e59af21c)

Discount code generated on 5th order., and that can be utilized in future order

![image](https://github.com/user-attachments/assets/3330e51e-ab36-4352-b9d4-b7b78f1bb404)

Applying discount code in future order

![image](https://github.com/user-attachments/assets/2d19109a-f0ec-42f0-9413-a9c174b82468)

---
### Snap of test result

![image](https://github.com/user-attachments/assets/71263c0a-e6bb-4231-8b02-1b2ab83dbdaa)

---
