import AppError from "../../../../utils/ErrorHandler.js";
import { pool } from "../../../database/database.js";
import postService from "../../../services.js/postService.js"; 
const NavsItems = async (req, res) => {

    try {
        const result = await postService.getNavItems()
        res.json({data:result});
    } catch (error) {
        console.error("Błąd przy pobraniu danych z bazy danych", error);
        next(new AppError(error,500))

    }
};

const GetLastArticles = async (req, res,next) => {

    try {
        const result = await postService.GetLastArticles()
        res.json({data:result});
    } catch (error) {
        console.error("Błąd przy pobraniu danych z bazy danych", error);
        next(new AppError(error,500))

    }
}
const GetLastNews = async (req, res,next) => {

    try {
        const result = await postService.GetLastNews()
        res.json({data:result});
    } catch (error) {
        console.error("Błąd przy pobraniu danych z bazy danych", error);
        next(new AppError(error,500))
    }
}

const GetLastPosts = async (req, res) => {

    try {
        const result = await postService.GetLastPosts()
        res.json({data:result});
    } catch (error) {
        console.error("Błąd przy pobraniu danych z bazy danych", error);
        next(new AppError(error,500))
    }
}

const GetPosts = async (req, res,next) => {
    const { category: type, subcategory: subtitle } = req.params;
    
    try {
        const result = await postService.GetPosts(type,subtitle);
        res.json({data: result});
    } catch (error) {
        console.error("Błąd przy pobraniu danych z bazy danych", error);
        next(new AppError(error,500))
    }
};

export const Controllers = {
    NavsItems,
    GetLastArticles,
    GetLastPosts,
    GetLastNews,
    GetPosts,
};

