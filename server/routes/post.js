import express from 'express';
import {getPost, createPost, likePost} from '../controllers/post.js';
import {signup, getlogin} from '../controllers/login.js';
import Username from '../models/login.js';
const router = express.Router();

router.get('/post', getPost);
router.post('/post', createPost);
router.patch('/:id/likePost', likePost);

// sign up
router.post('/login', signup);

// auth
router.get('/login', getlogin);

export default router;
