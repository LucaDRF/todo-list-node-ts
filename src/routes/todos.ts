import { Router } from "express";

const router = Router();

router.get('/', () => { console.log('ola');});

// router.post('/');

// router.put('/:id');

// router.delete('/:id');

export default router;