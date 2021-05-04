import { Router } from 'express';
import indexCtrl from '../controllers/indexCtrl'

const router = Router();
router.post('/', indexCtrl.UploadDownloadCtrl.upload);
router.post('/profile_picture/:id', indexCtrl.UploadDownloadCtrl.upload,indexCtrl.employeesCtrl.update);
router.post('/profile_picture/', indexCtrl.UploadDownloadCtrl.uploadMultipart,indexCtrl.employeesCtrl.bulkImage);
router.get('/:filename', indexCtrl.UploadDownloadCtrl.download);

export default router;