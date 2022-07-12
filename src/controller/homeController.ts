import {getManager} from "typeorm";
import {Home} from "../entity/home";
import express, { Request, Response } from 'express'


export async function getAllHome(req: Request, res: Response) {

    var skip: number = req.query.skip as unknown as number
    var take: number = req.query.take as unknown as number

    // connect to db
    const homeRepo = getManager().getRepository(Home);

    // query
    const homes: Home[] = await homeRepo.find({
        order: {
            id: "DESC"
        },
        take: take,
        skip: skip
    });

    // response
    res.send({
        "payload": homes,
        "count": homes.length
    });
}

export async function createHome(req: Request, res: Response) {
    try {
        const _new: Home = new Home();
        _new.name = req.body.name
        _new.desc = req.body.desc
        _new.price = req.body.price
        _new.post_code = req.body.post_code
    
        await _new.save()
        res.send({
            payload: req.body,
            status: true,
            message: 'succeed'
        })
    } catch(e) {
        console.error(e)
        res.send({
            payload: req.body,
            status: false,
            message: `error [${e}]`
        })
    }
    
}