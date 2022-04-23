import { IProduct } from '../interfaces/Product.interface';
import Product from '../models/product.model';

class ProductRepository {
  static async creatProduct(newProduct: IProduct) {
    await Product.create({
      name: newProduct.name,
      price: newProduct.price,
      description: newProduct.description,
    });
  }
}

export default ProductRepository;
