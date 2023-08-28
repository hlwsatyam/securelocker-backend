const express = require("express");
const app = express()
const cors = require('cors')
const mg = require('mongoose');
const Route = require("./Route/Routing");
require('dotenv').config()
const port = process.env.port || 8000
app.use(cors())
app.use(express.json())

app.use("/text", Route.text)
app.use("/locker", Route.Auth)
app.use("/photo", Route.photo)
app.use("/document", Route.document)


mg.connect(process.env.Mongo_Uri).then(() => {
    app.listen(port, () => {
        console.log(`server is running & Mongodb is Connected on ${port}`)
    })
    
}).catch(() => {
    console.log(` Mongodb is Not Connected😴🥱😴🥱 `)
}
)


