import express from 'express';
import {getPost, createPost, likePost} from '../controllers/post.js';
const router = express.Router();

// TODO Filter by location
router.get('/post', getPost);
router.post('/post', createPost);
router.patch('/:id/likePost', likePost);


export default router;
