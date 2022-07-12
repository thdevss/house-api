import express, { Request, Response, Router } from 'express'
import { createHome, getAllHome } from '../controller/homeController'

const router: Router = Router()

router.get('/', getAllHome);

router.post('/', createHome);


router.patch('/:id', (req: Request, res: Response) => {
    res.send('Update');
});


router.delete('/:id', (req: Request, res: Response) => {
    res.send('Del');
});


export default router