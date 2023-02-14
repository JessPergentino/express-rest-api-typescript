import { IProduct } from '@api/interfaces/Product.interface';
import Product from '@api/models/product.model';
import { IProductRepository } from './dtos/IProductRepository.interface';

class ProductRepository implements IProductRepository {
  async creatProduct(newProduct: IProduct): Promise<void> {
    await Product.create({
      name: newProduct.name,
      price: newProduct.price,
      description: newProduct.description,
    });
  }
}

export default ProductRepository;
