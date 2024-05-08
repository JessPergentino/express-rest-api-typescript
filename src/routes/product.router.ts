import ProductController from '@api/controllers/product.controller';
import { NextFunction, Request, Response, Router } from 'express';

const product = Router();

/**
 * @api {post} /product Cadastrar Produto
 * @apiName postProduct
 * @apiGroup Produto
 *
 * @apiParam {String} name           Nome do produto.
 * @apiParam {Number} price          Preço do produto.
 * @apiParam {String} description    Descrição do produto.
 *
 * @apiSuccess {String} status Status da API.
 * @apiSuccess {String} message Mensagem de retorno.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": "success",
 *       "message": "Produto cadastrado com sucesso!"
 *     }
 *
 * @apiError {String} status Status da API.
 * @apiError {String} message Mensagem de retorno.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 422 ProductError
 *     {
 *       "status": "error"
 *       "message": "O produto deve ter um nome"
 *     }
 *
 */
product.post('/product', (req: Request, res: Response, next: NextFunction): void => {
  req.log.info('Iniciando requisicao');
  ProductController.postProduct(req, res, next);
});

export default product;
