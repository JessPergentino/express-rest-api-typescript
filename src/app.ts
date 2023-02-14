import 'reflect-metadata';
import express, { NextFunction } from 'express';
import { pinoHttp } from '@config/logger';
import main from '@routes/main.router';
import product from '@routes/product.router';
import { ErrorNotFound } from '@api/errors/error.notFount';
import handleError from '@middlewares/error.handler';
import "@container/index"

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(pinoHttp);

app.use(main);
app.use(product);
/**
 * @api {get|post|put|delete} * Mostrar mensagem de erro quando a rota não é encontrada
 * @apiName RouteNotFound
 * @apiGroup Main
 *
 * @apiError {String} status Status da API.
 * @apiError {String} message Mensagem de retorno.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "error"
 *       "message": "'Route Not found"
 *     }
 */
// @ts-expect-error: Unreachable code error
app.use((_req: Request, _res: Response, next: NextFunction) => {
  const error = new ErrorNotFound(404, 'Route Not found');
  next(error);
});
app.use(handleError);

export default app;
