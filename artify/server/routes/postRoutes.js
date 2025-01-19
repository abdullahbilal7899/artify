import express from 'express';
import { createpost, getallpost } from '../controllers/postController.js';







const router =express.Router();


router.route('/').post(createpost)

router.route('/').get(getallpost)

export default router;
