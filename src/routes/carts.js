import { Router } from 'express';
import * as CartsService from '../Services/Carts.js';

const router = Router();

router.post('/', CartsService.addToCart);
router.get('/', CartsService.fetchCart);
router.post('/buy', CartsService.buyCart);
router.delete('/', CartsService.removeFromCart);

export default router;