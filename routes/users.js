import express from 'express';
const router = express.Router();

router.get('/',  (req, res) => { res.send('Getted /users'); });
router.post('/', (req, res) => { res.send('Posted /users'); });

export default router;