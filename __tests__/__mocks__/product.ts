import SequelizeMock from 'sequelize-mock';
const dbMock = new SequelizeMock();

const ProductMock = dbMock.define('product', {
  id: 1,
  name: 'Produto 1',
  price: 32,
  description: 'Descrição do Produto 1',
});

export default ProductMock;
