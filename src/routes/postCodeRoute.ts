import express, { Request, Response, Router } from 'express'

const router: Router = Router()

router.get('/', (req: Request, res: Response) => {
    res.send('Get');
});

router.get('/:postCode', (req: Request, res: Response) => {
    res.send(`Get from ${req.params.postCode}`);
});

export default router