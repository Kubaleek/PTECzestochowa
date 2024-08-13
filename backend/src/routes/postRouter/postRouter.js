import express from 'express'
import { Controllers } from './Controllers/controllers.js';
import data from '../../../utils/constants.js'
const {NavsItems,GetLastArticles,GetLastNews,GetLastPosts,GetPosts} = Controllers;
const postRouter = express.Router();

postRouter.get(`${data.posts}/menu`, NavsItems)
postRouter.get(`${data.posts}/lastArticles`, GetLastArticles);
postRouter.get(`${data.posts}/lastPosts`, GetLastPosts);
postRouter.get(`${data.posts}/lastNews`, GetLastNews);
postRouter.get(`${data.posts}/:category/:subcategory`, GetPosts);


export default postRouter;