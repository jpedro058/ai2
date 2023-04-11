const express = require("express");
const router = express.Router();

router.post("/soma", (req, res) => {
  //usar metodo post

  const valor1 = req.body.valor1;
  const valor2 = req.body.valor2;

  if (!valor1 || !valor2) {
    res.status(400).send("Os valores são obrigatórios!");
    return;
  }

  const resultado = parseInt(valor1) + parseInt(valor2);

  res.json({
    //usar parseint para converter para inteiro
    valor1: parseInt(valor1),
    valor2: parseInt(valor2),
    resultado: resultado,
  });

  console.log("Início da execução da rota soma...");
});

module.exports = router;
