import { Router } from 'express';
import CvController from '../controllers/Cv.controller..js';
import authMiddleware from '../middlewares/auth.middleware.js';
const cvRouter = Router();
cvRouter.post('/create', authMiddleware,  CvController.create);
cvRouter.get('/:id', authMiddleware,CvController.findOne); 



export default cvRouter;