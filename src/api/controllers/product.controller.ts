import { NextFunction, Request, Response } from 'express';
import { SUCCESS } from '../../resource/constants';
import ProductService from '../services/product.service';

class ProductController {
  static async postProduct(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    const newProduct = {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
    };

    try {
      await ProductService.registerProduct(newProduct);
      return res.json({ status: SUCCESS, message: 'Produto cadastrado com sucesso!' });
    } catch (error) {
      next(error);
    }
  }
}

export default ProductController;
