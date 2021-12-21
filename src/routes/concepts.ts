import { Router } from 'express';
import { createConcept, getConcepts } from '../controllers/concepts';

const router = Router();

router.get('/', getConcepts);

router.post('/', createConcept);

export default router;
