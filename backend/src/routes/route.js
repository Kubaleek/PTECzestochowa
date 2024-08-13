import express from 'express'
import { Router } from "express";
const controller = require("../controllers/controller")
// Trasa Nawigacyjna
router.get("/menu", controller.NavsItems)
router.get("/lastArticles", controller.GetLastArticles);
router.get("/lastPosts", controller.GetLastPosts);
router.get("/lastNews", controller.GetLastNews);
router.get('/:category/:subcategory', controller.GetPosts);

module.exports = router;