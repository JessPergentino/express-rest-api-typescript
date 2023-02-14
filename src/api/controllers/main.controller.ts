import { SUCCESS } from '@resource/constants';
import { Request, Response } from 'express';

class MainController {
  static showInfo(req: Request, res: Response): Response {
    return res.json({ status: SUCCESS, message: 'Welcome to API Service' });
  }
}

export default MainController;
