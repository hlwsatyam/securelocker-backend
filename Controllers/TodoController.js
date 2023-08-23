const ModelTodo = require("../Models/TodoModels")

module.exports.GetAllLocker = async (req, res) => {
    const { email } = req.body

    if (email == "") {
        return res.send([{
            id: 405,
            text: "Please Login To Secure~Locker"
        }])
    }

    const AllDetail = await ModelTodo.findOne({ email })


    const TextArr = [...AllDetail.text]

    return res.send(TextArr)

}

module.exports.SaveLocker = async (req, res) => {
    const { text, email } = req.body
    if (email == "") {
        return res.send([{
            id: 404,
            text: "please login or Signup!"
        }])
    }
    const AllDetail = await ModelTodo.findOne({ email })

    const obj = AllDetail._id
    const id = Math.random()

    const TextArr = [...AllDetail.text, {
        id: id,
        text: text
    }]

    const AllArr = await ModelTodo.findByIdAndUpdate(obj, { text: TextArr })

    return res.send(TextArr)

}
module.exports.updateLocker = async (req, res) => {

    const { id, email } = req.body

    if (email == "") {
        return res.send("")
    }

    const AllDetail = await ModelTodo.findOne({ email })

    const Alltodo = AllDetail.text
    const objId = AllDetail._id
    var currentText = ''
    for (const i of Alltodo) {
        if (i.id == id) {
            currentText = i.text
        }
    }
    
    const newAllTodo = Alltodo.filter((item) => item.id != id)

    await ModelTodo.findByIdAndUpdate(objId, { text: newAllTodo })


    return res.send(currentText)

}

module.exports.deleteLocker = async (req, res) => {

    const { id, email } = req.body

    const AllDetail = await ModelTodo.findOne({ email })
    const objId = AllDetail._id
    const Alltodo = AllDetail.text

    const newAllTodo = Alltodo.filter((item) => item.id != id)

    await ModelTodo.findByIdAndUpdate(objId, { text: newAllTodo })
    return res.send("Deleted")
}