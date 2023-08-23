
const mg = require('mongoose')

const TodoSchema = new mg.Schema({

    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
    ,
    text: []

})

const ModelTodo = mg.model('Todo', TodoSchema)

module.exports = ModelTodo