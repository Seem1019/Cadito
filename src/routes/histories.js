import { Router } from 'express';
import * as HistoriesService from '../Services/Histories.js';

const router = Router();

router.get('/:user_id', HistoriesService.fetchHistory);

export default router;