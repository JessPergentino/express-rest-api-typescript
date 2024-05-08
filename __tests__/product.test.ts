import request from 'supertest';
import app from '../src/app';

jest.mock('../src/config/db.ts', () => {
  return require('./__mocks__/db');
});

jest.mock('../src/api/models/product.model.ts', () => {
  return require('./__mocks__/product');
});

describe('Product', () => {
  it('postProduct - should create a product', async () => {
    const res = await request(app).post('/product').send({
      name: 'Produto 1',
      price: 20,
      description: 'Descrição do produto 1',
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Produto cadastrado com sucesso!');
  });

  it('postProduct - should not create a product with an invalid name', async () => {
    const res = await request(app).post('/product').send({
      name: '',
      price: 20,
      description: 'Descrição do produto 1',
    });

    expect(res.statusCode).toEqual(422);
    expect(res.body.message).toEqual('O produto deve ter um nome');
  });

  it('postProduct - should not create a product with an invalid price', async () => {
    const res = await request(app).post('/product').send({
      name: 'Produto 1',
      price: -10,
      description: 'Descrição do produto 1',
    });

    expect(res.statusCode).toEqual(422);
    expect(res.body.message).toEqual('O produto deve ter um preço válido');
  });

  it('postProduct - should not create a product with an invalid description', async () => {
    const res = await request(app).post('/product').send({
      name: 'Produto 1',
      price: 10,
      description: '',
    });

    expect(res.statusCode).toEqual(422);
    expect(res.body.message).toEqual('O produto deve ter uma descrição válida');
  });
});
