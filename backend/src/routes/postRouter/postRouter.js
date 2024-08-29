import express from 'express';
import { Controllers } from './Controllers/controllers.js';
import data from '../../../utils/constants.js';
import { pool } from '../../database/database.js';
import postService from '../../services.js/postService.js';
import { convertSlugToTitle } from '../../../utils/utills.js';
import slugify from 'slugify';

const { NavsItems, GetLastArticles, GetLastNews, GetLastPosts } = Controllers;
const postRouter = express.Router();

postRouter.get(`${data.posts}/menu`, NavsItems);
postRouter.get(`${data.posts}/lastArticles`, GetLastArticles);
postRouter.get(`${data.posts}/lastPosts`, GetLastPosts);
postRouter.get(`${data.posts}/lastNews`, GetLastNews);

postRouter.get(`${data.posts}/:category/:subtitle`, async (req, res, next) => {
    const { category, subtitle } = req.params;
    try {
        const formattedCategory = slugify(convertSlugToTitle(category), { lower: true });
        const formattedSubtitle = slugify(convertSlugToTitle(subtitle), { lower: true });

        const query = `
            SELECT 
                posts.id, 
                subposts.subpost_id,  
                posts.subtitle, 
                posts.title, 
                posts.content AS post_content, 
                posts.category AS post_category 
            FROM 
                posts 
            LEFT JOIN 
                subposts ON posts.id = subposts.subpost_id 
            WHERE 
                LOWER(posts.subtitle) = LOWER(?) 
                AND LOWER(posts.category) = LOWER(?)`;

        const [result] = await pool.query(query, [formattedSubtitle, formattedCategory]);
        console.log(result)
        res.json({ data: result });
    } catch (error) {
        console.error("Błąd przy pobraniu danych z bazy danych", error);
        next(new AppError(error, 500));
    }
});

export default postRouter;
