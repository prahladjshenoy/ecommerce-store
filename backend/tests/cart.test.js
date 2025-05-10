const request = require('supertest');
const app = require('../index'); 

describe('Ecommerce API', () => {
  const userId = 'demo';

  it('should add item to cart', async () => {
    const res = await request(app)
      .post(`/cart/${userId}/add`)
      .send({item:{ productId: 'p1', name: 'Product-1', price: 100, qty: 1 }});

    expect(res.statusCode).toBe(200);
    expect(res.body.cart).toEqual([
      { productId: 'p1', name: 'Product-1', price: 100, qty: 1 }
    ]);
  });

  it('should get the current cart', async () => {
    const res = await request(app).get(`/cart/${userId}`);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.cart)).toBe(true);
  });

  it('should checkout without discount code', async () => {
    const res = await request(app)
      .post(`/cart/${userId}/checkout`)
      .send();

    expect(res.statusCode).toBe(200);
    expect(res.body.order).toHaveProperty('originalTotal');
    expect(res.body.order.discountAmount).toBe(0);
  });

  it('should return error for invalid discount code', async () => {
    const res = await request(app)
      .post(`/cart/${userId}/checkout`)
      .send({ discountCode: 'INVALID-CODE' });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });

  it('should return admin stats', async () => {
    const res = await request(app).get('/admin/stats');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('totalItemsPurchased');
    expect(res.body).toHaveProperty('totalPurchaseAmount');
    expect(res.body).toHaveProperty('discountCodesUsed');
    expect(res.body).toHaveProperty('totalDiscountAmount');
  });
  
});

