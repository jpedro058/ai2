const express = require("express");
const router = express.Router();

router.get("/info", (req, res) => {
  res.send("Rota info executada com sucesso...");

  console.log("Início da execução da rota info...");
});

module.exports = router;
