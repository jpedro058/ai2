const sequelize = require("./conections.js");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

sequelize.authenticate().then(() => {
  console.log("Conexão com o banco de dados realizada com sucesso!");

  sequelize.sync({ force: false });
});

//configurações
app.set("port", process.env.port || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//rotas
app.use("/filme", require("./routes/filmeRoute.js"));
app.use("/genero", require("./routes/generoRoute.js"));

app.listen(app.get("port"), () => {
  console.log("Servidor iniciado na porta: " + app.get("port"));
});
