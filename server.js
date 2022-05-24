const express = require('express')
const app = express()
const port = 3000

const todos = [
    {
        id: 1,
        task: 'Get groceries',
    },
    {
        id: 2,
        task: 'Order Chinese food',
    },
    {
        id: 3,
        task: 'Read Tolkien',
    },
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/todos', (req, res) => {
    res.send(todos);
})

app.get('/todos/:id', (req, res) => {
    if (req.params.id > 3 || req.params.id < 1){
        res.status(404);
        res.send("Todo with id " + req.params.id + " does not exist.");
    } else {
        res.send(todos[req.params.id - 1]);
    }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})