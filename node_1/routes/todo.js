const express = require('express')

const Router = express.Router()
const todos = []

Router.get('/', (request, response) => {
    response.status(200).json(todos)
})

Router.post('/', (req, res) => {
    // console.log("body: ", req.body)
    const {todo} = req.body

    todos.push(todo)
    
    res.status(200).json(todo)
})

module.exports = Router