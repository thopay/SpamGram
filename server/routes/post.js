import express from 'express';
import {getPost, createPost, likePost, dislikePost, createComment, getComments} from '../controllers/post.js';
import {signup, getlogin} from '../controllers/login.js';
import Username from '../models/login.js';
import { getCollege } from '../controllers/college.js';
const router = express.Router();

router.get('/post', getPost);
router.post('/post', createPost);
router.get('/post/likePost', likePost);
router.get('/post/dislikePost', dislikePost);

router.get('/post/comment', getComments);
router.get('/colleges', getCollege);
router.post('/post/comment', createComment);

// sign up
router.get('/signup', signup);

// auth
router.get('/login', getlogin);

export default router;
