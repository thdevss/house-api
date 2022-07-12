import {getManager} from "typeorm";
import {Home} from "../entity/home";


export async function getAllPostCode() {

    // get a post repository to perform operations with post
    const homeRepo = getManager().getRepository(Home);

    // load posts
    const postCodes: Home[] = await homeRepo.createQueryBuilder('home')
                                .select('home.post_code as post_code')
                                .distinct(true)
                                .getRawMany();

    // return loaded posts
    return postCodes;
}


export async function getPriceData(post_code: number) {

    // get a post repository to perform operations with post
    const homeRepo = getManager().getRepository(Home);

    // load posts
    const { average, median } = await homeRepo.createQueryBuilder('home')
                                .select('AVG(price) as average, PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY price) as median')
                                .where('post_code = :post_code', { post_code: post_code })
                                .getRawOne();

    // return loaded posts
    return {
        average: average,
        median: median
    };
}
