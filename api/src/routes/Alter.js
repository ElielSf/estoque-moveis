import express from 'express';

const router = express.Router();

router.use(express.json());

router.put('/movel', (req, res) => {
    res.send('a');
});

export default router;