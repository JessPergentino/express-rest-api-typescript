import { IProduct } from '@api/interfaces/Product.interface';

interface IProductRepository {
  creatProduct(newProduct: IProduct): Promise<void>;
}

export type { IProductRepository };
