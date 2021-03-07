const mainRoutes = require("express").Router();
const booksRoutes = require("./booksRoutes");

mainRoutes.use("/books", booksRoutes);
module.exports = mainRoutes;
