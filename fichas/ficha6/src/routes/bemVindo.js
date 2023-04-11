const express = require("express");
const router = express.Router();

router.get("/bem-vindo", (req, res) => {
  const nome = req.query.nome;

  if (!nome) {
    res.status(400).send("O nome é obrigatório!");
    return;
  }

  res.send(`Bem-vindo ${nome}!`);
});

module.exports = router;
