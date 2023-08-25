const ModelTodo = require("../Models/TodoModels")

module.exports.SaveDocument = async (req, res) => {


    const { tableData, email } = req.body

    const AllDetail = await ModelTodo.findOne({ email })
    const docArr = AllDetail.document
    const documentArr = [...docArr, ...tableData]

    const AllArr = await ModelTodo.findOneAndUpdate(email, { document: documentArr })

    return res.send(documentArr)

}