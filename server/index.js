const express = require('express');
const ctrl = require('./controller');
const app = express();
const port = 4004;

app.use(express.json());

app.get("/api/todos", ctrl.getTodos)
app.post("/api/todos", ctrl.addTodo)
// app.delete("/api/todos/:id")
// app.put("/api/todos/complete/:id")
// app.put("/api/todos/edit/:id")

app.listen(port, () => console.log(`Merry Christmas ya filthy port:${port}`));