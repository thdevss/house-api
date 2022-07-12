import {getManager} from "typeorm";
import {Home} from "../entity/home";


export async function getAllHome(skip: number, take: number) {

    // get a post repository to perform operations with post
    const homeRepo = getManager().getRepository(Home);

    // load posts
    const homes: Home[] = await homeRepo.find({
        order: {
            id: "DESC"
        },
        take: take,
        skip: skip
    });

    // return loaded posts
    return homes;
}
