import { NextFunction, Request, Response } from 'express';
import { logger } from '@config/logger';
import { SUCCESS } from '@resource/constants';
import ProductService from '@api/services/Product.service';
import { container } from 'tsyringe';

class ProductController {
  static async postProduct(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    const productService = container.resolve(ProductService);
    
    const newProduct = {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
    };

    try {
      await productService.registerProduct(newProduct);
      return res.json({ status: SUCCESS, message: 'Produto cadastrado com sucesso!' });
    } catch (error) {
      logger.error('falha na requisição');
      next(error);
    }
  }
}

export default ProductController;
