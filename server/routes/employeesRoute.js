import { Router } from 'express'
import indexCtrl from '../controllers/indexCtrl'

const router = Router();

router.get ('/', indexCtrl.employeesCtrl.findAll)

export default router