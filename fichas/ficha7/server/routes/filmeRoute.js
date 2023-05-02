const { Router } = require("express");
const { Filme } = require("../model/filme.js");
const filmesController = require("../controllers/filmeController");

const filmesRouter = Router();

filmesRouter.get("/list", filmesController.filme_list);
filmesRouter.get("/get/:id", filmesController.filme_detail);
filmesRouter.post("/create", filmesController.filme_create);
filmesRouter.put("/update/:id", filmesController.filme_update);

module.exports = filmesRouter;
