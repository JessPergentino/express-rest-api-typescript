import { inject, injectable } from 'tsyringe';
import { ProductError } from '@api/errors/product.error';
import { IProduct } from '@api/interfaces/Product.interface';
import { IProductRepository } from '@api/repositories/dtos/IProductRepository.interface';

@injectable()
class ProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  async registerProduct(newProduct: IProduct) {
    if (newProduct.name.length === 0) {
      throw new ProductError(422, 'O produto deve ter um nome');
    }

    if (newProduct.price < 0) {
      throw new ProductError(422, 'O produto deve ter um preço válido');
    }

    if (newProduct.description.length === 0) {
      throw new ProductError(422, 'O produto deve ter uma descrição válida');
    }

    this.productRepository.creatProduct({
      name: newProduct.name,
      price: newProduct.price,
      description: newProduct.description,
    });
  }
}

export default ProductService;
