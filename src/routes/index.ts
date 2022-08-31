import express from 'express';
const router = express.Router();
import { GetImage } from '../controllers/flickrImageController'

router.get('/', GetImage)

export default router