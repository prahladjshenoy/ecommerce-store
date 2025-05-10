const store = {
  users: {},

  // global pool of generated codes (to enforce one-time use)
  discountCodes: {},

  // Every 5th order earns the user a new code
  nthOrder: 5,

  generateDiscountCode() {
    const code = `DISCOUNT-${Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase()}`;
    this.discountCodes[code] = { used: false };
    return code;
  },

  validateDiscountCode(code) {
    return this.discountCodes[code] && !this.discountCodes[code].used;
  },

  markDiscountUsed(code) {
    if (this.discountCodes[code]) {
      this.discountCodes[code].used = true;
    }
  },

  getStats() {
    const stats = {
      totalItemsPurchased: 0,
      totalPurchaseAmount: 0,
      discountCodesUsed: [],
      totalDiscountAmount: 0,
    };

    Object.values(this.users).forEach((user) => {
      user.orders.forEach((order) => {
        // count items
        order.cart.forEach((item) => {
          stats.totalItemsPurchased += item.qty;
        });

        // sum amounts
        stats.totalPurchaseAmount += order.totalAmount;

        if (order.discountCode) {
          stats.discountCodesUsed.push(order.discountCode);
          stats.totalDiscountAmount += order.discountAmount;
        }
      });
    });

    return stats;
  },
};

module.exports = store;
