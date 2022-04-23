import { Request, Response } from 'express';
import { SUCCESS } from '../../resource/constants';

class MainController {
  static showInfo(req: Request, res: Response): Response {
    return res.json({ status: SUCCESS, message: 'Welcome to API Service' });
  }
}

export default MainController;
