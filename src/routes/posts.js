import { Router } from 'express';
import * as PostsServices from '../Services/Posts.js';

const router = Router();

router.post('/', PostsServices.createPost);
router.get('/', PostsServices.fetchPosts);
router.get('/recent', PostsServices.fetchRecentPosts);

export default router;