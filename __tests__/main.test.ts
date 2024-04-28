import request from 'supertest';
import app from '../src/app';

describe('Main', () => {
  it('ShowInfo GET', async () => {
    const res = await request(app).get('/');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message');
  });
});
