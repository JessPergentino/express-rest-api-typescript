import { Request, Response, Router } from 'express';
import MainController from '../api/controllers/main.controller';

const main = Router();

/**
 * @api {get} / Mostrar Informações da API
 * @apiName ShowInfo
 * @apiGroup Main
 *
 * @apiSuccess {String} status Status da API.
 * @apiSuccess {String} message Mensagem de retorno.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": "success",
 *       "message": "Welcome to API Service"
 *     }
 */
main.get('/', (req: Request, res: Response): void => {
  req.log.info('Welcome to API Service');
  MainController.showInfo(req, res);
});

export default main;
