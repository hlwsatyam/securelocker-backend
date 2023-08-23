const exp = require('express')
const { GetAllText, SaveText, updateText, deleteText } = require('../Controllers/TodoController')
const { Login, Signup } = require('../Controllers/SignLogController')
const { SavePhoto } = require('../Controllers/PhotoController')

const text = exp.Router()
const Auth = exp.Router()
const photo = exp.Router()



Auth.post("/login", Login)
Auth.post("/signup", Signup)


text.post("/", GetAllText)
text.post("/Textsave", SaveText)
text.put("/Textupdate", updateText)
text.post("/Textdelete", deleteText)


// photo.post("/", GetAllLocker)
photo.post("/Photosave", SavePhoto)
// photo.put("/update", updateLocker)
// photo.post("/delete", deleteLocker)


module.exports = { text, Auth, photo }