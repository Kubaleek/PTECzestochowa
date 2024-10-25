import express from 'express';
import { Controllers } from './Controllers/controllers.js';
import data from '../../../utils/constants.js';
import { pool } from '../../database/database.js';
import { convertSlugToTitle } from '../../../utils/utills.js';
import slugify from 'slugify';

const { NavsItems, GetLastArticles, GetLastNews, GetLastPosts } = Controllers;
const postRouter = express.Router();

postRouter.get(`/menu`, NavsItems);
postRouter.get(`/lastArticles`, GetLastArticles);
postRouter.get(`/lastPosts`, GetLastPosts);
postRouter.get(`/lastNews`, GetLastNews);
postRouter.get(`/:category/`, async (req, res, next) => {
    const { category } = req.params;
    const { id, subid } = req.query;

    try {
        // Użyj funkcji convertSlugToTitle do sformatowania kategorii
        let formattedCategory = slugify(convertSlugToTitle(category), { lower: true }).replace("-", " ");
        if(formattedCategory == "czlonkostwo"){
            formattedCategory = "Członkostwo"
        }
        let query;
        let queryParams = [formattedCategory];

        console.log(formattedCategory);

        if (id && subid) {
            query = `
                SELECT 
                    posts.id, 
                    subposts.subpost_id,  
                    posts.subtitle, 
                    posts.title, 
                    subposts.content AS subposts_content, 
                    posts.category AS post_category 
                FROM 
                    posts 
                LEFT JOIN 
                    subposts ON posts.id = subposts.post_id 
                WHERE 
                    LOWER(posts.category) = LOWER(?) 
                    AND posts.id = ? 
                    AND subposts.subpost_id = ?`;

            queryParams.push(id, subid);
        } else if (id) {
            query = `
                SELECT 
                    posts.id, 
                    posts.subtitle, 
                    posts.title, 
                    posts.content AS post_content, 
                    posts.category AS post_category 
                FROM 
                    posts 
                WHERE 
                    LOWER(posts.category) = LOWER(?) 
                    AND posts.id = ?`;

            queryParams.push(id);
        } else {
            query = `
                SELECT 
                    posts.id, 
                    posts.subtitle, 
                    posts.title, 
                    posts.content AS post_content, 
                    posts.category AS post_category 
                FROM 
                    posts 
                WHERE 
                    LOWER(posts.category) = LOWER(?)`;
        }

        const [result] = await pool.query(query, queryParams);
        console.log(result);
        res.json({ data: result });
    } catch (error) {
        console.error("Błąd przy pobraniu danych z bazy danych", error);
        next(new AppError(error, 500));
    }
});

export default postRouter;
