const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const tarefaController = require("./controllers/tarefaController");
const usuarioController = require("./controllers/usuarioController");


const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(expressLayouts);
app.set('layout','./layouts/default/index');

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("<h1>Tarefas</h1>");
});
app.get('/login', (req,res) => {
    app.set('layout', './layouts/default/login')
    usuarioController.login(req,res);
});
app.post('/login', (req,res) => {
    usuarioController.auth(req,res);
});
app.get("/tarefas", tarefaController.getTarefas);
app.post("/tarefas", tarefaController.addTarefa);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
