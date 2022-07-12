import express, { Request, Response, Router } from 'express'

const router: Router = Router()

router.get('/', (req: Request, res: Response) => {
    res.send('Get');
});

router.post('/', (req: Request, res: Response) => {
    res.send('Post');
});

export default router