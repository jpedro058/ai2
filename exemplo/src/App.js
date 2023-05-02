const { response } = require("express");
const express = require("express");
const { post } = require("./routes/employeeRoute.js");
const app = express();

app.set("port", process.env.PORT || 3000);

app.use(express.json());

const employeeRouters = require("./routes/employeeRoute.js"); //Rota
app.use("/employee", employeeRouters);

app.use("/teste", (req, res) => {
  res.send("Rota TESTE.");
});

app.use("/", (req, res) => {
  res.send("Hello World");
});

app.listen(app.get("port"), () => {
  console.log("Start server on port " + app.get("port"));
});

function ListarTarefas() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    fetch("api/tarefas")
      .then((response) => response.json())
      .then((data) => setTarefas(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ul>
      {tarefas.map((tarefas) => (
        <li key={tarefas.id}>{tarefas.descricao}</li>
      ))}
    </ul>
  );
}

function addTask(descricao) {
  fetch("api/tarefas", {
    method: "POST",
    headers: { "Content type": "application.JSON" },
    body: JSON.stringify({ descricao }),
  })
    .then((Response) => Response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(Error));
}
