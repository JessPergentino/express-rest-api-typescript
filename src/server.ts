import express, { Request, Response, Router } from 'express';

const app = express();

const route = Router();

app.use(express.json());
app.use(express.static('public'));

/**
 * @api {get} / Endpoint Principal
 * @apiGroup Sistema
 *
 * @apiSuccess {String} message Mensagem de retorno
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      "message": "hello world with Typescript"
 *    }
 *
 */

route.get('/', (_req: Request, res: Response) => {
  res.json({
    message: 'hello world with Typescript',
  });
});

app.use(route);

app.listen(3000, () => 'server running on port 3000');
