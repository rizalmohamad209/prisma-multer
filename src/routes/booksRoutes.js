const booksRoutes = require("express").Router();
const booksController = require("../controllers/bookController");
const uploadMiddleware = require("../helpers/uploadMidlleware");

booksRoutes.get("/", booksController.getAllBooks);
booksRoutes.post("/", uploadMiddleware, booksController.postBook);
booksRoutes.get("/pagi", booksController.paginationBooks);
module.exports = booksRoutes;
