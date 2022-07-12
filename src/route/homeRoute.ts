import express, { Request, Response, Router } from 'express'
import { createHome, destroyHome, getAllHome, updateHome } from '../controller/homeController'

const router: Router = Router()

router.get('/', getAllHome);

router.post('/', createHome);


router.patch('/:id', updateHome);


router.delete('/:id', destroyHome)

export default router