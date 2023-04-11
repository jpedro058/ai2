const express = require("express");
const app = express();
//configurações
app.set("port", process.env.port || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//rotas
app.use(require("./routes/info"));
app.use(require("./routes/bemVindo"));
app.use(require("./routes/soma"));

//Implemente uma middleware que a cada execução de uma rota imprima na consola a URL de origem conjuntamente com a data e hora.
app.use((req, res, next) => {
  console.log("URL de origem: " + req.originalUrl);
  console.log("Data e hora: " + new Date());
  next();
});

app.listen(app.get("port"), () => {
  console.log("Servidor iniciado na porta: " + app.get("port"));
});
