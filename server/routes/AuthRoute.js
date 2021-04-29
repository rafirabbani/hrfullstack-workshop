// 1. import module Router
import { Router } from 'express';
import indexCtrl from '../controllers/indexCtrl'


const router = Router();
router.get('/',indexCtrl.AuthController.requireSignin,indexCtrl.AuthController.findAll);
router.post('/signup/', indexCtrl.AuthController.signup);
router.post('/signin', indexCtrl.AuthController.signin);

export default router;