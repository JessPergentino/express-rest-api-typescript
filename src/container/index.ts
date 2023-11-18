import { IProductRepository } from '@api/repositories/dtos/IProductRepository.interface';
import ProductRepository from '@api/repositories/product.repository';

import { container } from 'tsyringe';

container.registerSingleton<IProductRepository>('ProductRepository', ProductRepository);
