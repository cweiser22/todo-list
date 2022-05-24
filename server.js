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


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})