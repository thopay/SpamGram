import express from 'express';
import {getPost, createPost, likePost} from '../controllers/post.js';
const router = express.Router();


router.get('/', getPost);
router.get('/', createPost);
router.patch('/:id/likePost', likePost);

export default router;
