import request from 'supertest';
import app from '../src/app';

jest.mock('../src/config/db.ts', () => {
  return require('./__mocks__/db');
});

describe('Main', () => {
  it('ShowInfo GET', async () => {
    const res = await request(app).get('/');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message');
  });
});
