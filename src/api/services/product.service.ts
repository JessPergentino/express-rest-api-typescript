import { ProductError } from '../errors/product.error';
import { IProduct } from '../interfaces/Product.interface';
import ProductRepository from '../repositories/product.repository';

class ProductService {
  static async registerProduct(newProduct: IProduct) {
    if (newProduct.name.length === 0) {
      throw new ProductError(422, 'O produto deve ter um nome');
    }

    if (newProduct.price < 0) {
      throw new ProductError(422, 'O produto deve ter um preço válido');
    }

    if (newProduct.description.length === 0) {
      throw new ProductError(422, 'O produto deve ter uma descrição válida');
    }

    ProductRepository.creatProduct({
      name: newProduct.name,
      price: newProduct.price,
      description: newProduct.description,
    });
  }
}

export default ProductService;
