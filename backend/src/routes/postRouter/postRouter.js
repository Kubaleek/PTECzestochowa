import express from 'express'
import { Controllers } from './Controllers/controllers.js';
import data from '../../../utils/constants.js'
import postService from '../../services.js/postService.js';
import { convertSlugToTitle } from '../../../utils/utills.js';
const {NavsItems,GetLastArticles,GetLastNews,GetLastPosts,GetPosts} = Controllers;
const postRouter = express.Router();

postRouter.get(`${data.posts}/menu`, NavsItems)
postRouter.get(`${data.posts}/lastArticles`, GetLastArticles);
postRouter.get(`${data.posts}/lastPosts`, GetLastPosts);
postRouter.get(`${data.posts}/lastNews`, GetLastNews);
postRouter.get(`${data.posts}/:category/:subtitle`, async (req, res,next) => {
    const { category,subtitle} = req.params;
    try {
        console.log(category,subtitle)

        console.log(convertSlugToTitle(category),convertSlugToTitle(subtitle))
        const result = await postService.GetPosts(category,subtitle);
        res.json({data: result});
    } catch (error) {
        console.error("Błąd przy pobraniu danych z bazy danych", error);
        next(new AppError(error,500))
    }
}
);


export default postRouter;