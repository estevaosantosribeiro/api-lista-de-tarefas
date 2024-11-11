const express = require("express");
const cors = require("cors");
// const testController = require("./controllers/testController");
const taskModel = require("./models/taskModel");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
    const id = req.query.id;
    const tasks = await taskModel.getAll(id);
    if (tasks.length > 0) {
        let mensagem = "";
        tasks.forEach((element, index) => {
            let elementString = JSON.stringify(element);
            mensagem += `Posição: ${index}, Elemento: ${elementString} <br>`;
        }); 
        res.send(tasks);
    } else {
        res.send(tasks);
    }
});

app.get("/task", async (req, res) => {
    const id = req.query.id;
    const task = await taskModel.selectTask(id);
    console.log(task);
    res.send(task);
});

app.get("/editartask", async (req, res) => {
    const id = req.query.id;
    const status = req.query.status;

    const task = {
        id,
        status,
    };

    const updatedTask = await taskModel.updateTask(task);
    res.send(updatedTask);
});

app.get("/editartitle", async (req, res) => {
    const id = req.query.id;
    const title = req.query.title;

    const task = {
        id,
        title,
    };

    const updatedTask = await taskModel.updateTitle(task);
    res.send(updatedTask);
});

app.get("/deletartask", async (req, res) => {
    const id = req.query.id;
    const deletedTask = await taskModel.deleteTask(id);
    res.send(deletedTask);
});

app.get("/verificarusuario", async (req, res) => {
    const email = req.query.email;
    const verifyUser = await taskModel.selectUser(email);
    if (verifyUser) {
        res.send({
            success: false,
            message: "Este usuário já existe",
        });
    } else {
        res.send({
            success: true,
            message: "E-mail disponível",
        });
    }
});

app.get("/criarusuario", async (req, res) => {
    const name = req.query.name;
    const email = req.query.email;
    const password = req.query.password;

    const user = {
        name,
        email,
        password,
    };
    const insertUser = await taskModel.createUser(user);

    res.send({
        success: true,
        message: "Usuário criado com sucesso.",
        id: insertUser.insertId,
        user: insertUser
    });
});

app.get("/login", async (req, res) => {
    const email = req.query.email;
    const password = req.query.password;

    const user = {
        email,
        password,
    };

    const authenticated = await taskModel.auth(user);
    if (authenticated.userAuth) {
        res.send({
            success: true,
            message: "Usuário logado com sucesso.",
            id: authenticated.result.id,
            user: authenticated.result
        });
    } else {
        res.send({
            success: false,
            message: "E-mail ou senha incorretos!",
        });
    }
});

app.get("/criartarefa", async (req, res) => {
    const title = req.query.title;
    const id = req.query.id;

    const insertTask = await taskModel.createTask(title, id);
    // Tarefa criada. Id da tarefa: ${insertTask.insertId}
    const test = JSON.stringify(insertTask);
    res.send(`${title}, ${id} <br> ${test}`);
});

app.listen(3333, () => console.log("Server running on port 3333"));