import express, { Request, Response, Router } from 'express'
import { getAllHome } from '../controller/homeController'

const router: Router = Router()

router.get('/', async (req: Request, res: Response) => {
    var skip: number = req.query.skip as unknown as number
    var take: number = req.query.take as unknown as number

    const all_home = await getAllHome(skip, take)
    res.send({
        "payload": all_home,
        "count": all_home.length
    });
});

router.post('/', (req: Request, res: Response) => {
    res.send('Post');
});


router.patch('/:id', (req: Request, res: Response) => {
    res.send('Update');
});


router.delete('/:id', (req: Request, res: Response) => {
    res.send('Del');
});


export default router