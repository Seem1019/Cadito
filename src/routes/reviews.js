import { Router } from 'express';
import * as ReviewService from '../Services/Reviews.js';

const router = Router();

router.post('/', ReviewService.createReview);
router.get('/', ReviewService.fetchReviews);

export default router;