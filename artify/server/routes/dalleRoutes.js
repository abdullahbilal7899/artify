import express from 'express';
import * as dotenv from 'dotenv'
import {v2 as cloudinary} from 'cloudinary'
import {OpenAI} from 'openai'
import { post} from '../controllers/dall-eController.js';



dotenv.config()

const router =express.Router();



router.route('/').post(post)
export default router
