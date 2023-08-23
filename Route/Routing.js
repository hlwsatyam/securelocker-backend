const exp = require('express')
const { GetAllLocker, SaveLocker, updateLocker, deleteLocker } = require('../Controllers/TodoController')
const { Login, Signup } = require('../Controllers/SignLogController')

const text = exp.Router()
const Auth = exp.Router()

text.post("/", GetAllLocker)
text.post("/save", SaveLocker)

Auth.post("/login", Login)
Auth.post("/signup", Signup)

text.put("/update", updateLocker)
text.post("/delete", deleteLocker)

module.exports = { text, Auth }