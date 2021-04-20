import { Router } from 'express'
import indexCtrl from '../controllers/indexCtrl'

const router = Router();
router.get ('/', indexCtrl.regionCtrl.findAll)
router.get ('/:id', indexCtrl.regionCtrl.findOne)
router.post ('/', indexCtrl.regionCtrl.createNewRegion)
router.put ('/:id', indexCtrl.regionCtrl.changeRegionName)
router.delete ('/:id', indexCtrl.regionCtrl.deleteRegion)
router.get('/rawsql/:id', indexCtrl.regionCtrl.rawQuery)

export default router