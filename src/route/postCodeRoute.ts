import express, { Request, Response, Router } from 'express'
import { getAllPostCode, getPriceData } from '../controller/postCodeController'

const router: Router = Router()

router.get('/', async (req: Request, res: Response) => {
    const all_postCode = await getAllPostCode()
    res.send({
        "payload": all_postCode,
        "count": all_postCode.length
    });
});

router.get('/:postCode', async (req: Request, res: Response) => {
    var postCode: number = req.params.postCode as unknown as number

    const postCodePriceData = await getPriceData(postCode)
    res.send({
        "payload": postCodePriceData
    });
});

export default router