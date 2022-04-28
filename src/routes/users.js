import { Router } from 'express';
import * as UserService from '../Services/User.js';

const router = Router();

router.get('/', UserService.fetchUser);

router.post('/register', UserService.register);

router.post('/login', UserService.login);

router.post('/prev-login', UserService.prevLogin);

export default router;