import { DataTypes } from 'sequelize';
import DataBase from '@config/db';

const Product = DataBase.define('product', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DOUBLE,
  },
  description: DataTypes.STRING,
});

export default Product;
