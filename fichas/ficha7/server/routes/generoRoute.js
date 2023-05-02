const { Router } = require("express");
const generoController = require("../controllers/generoController");

const generoRouter = Router();

generoRouter.get("/list", generoController.genero_list);

module.exports = generoRouter;
