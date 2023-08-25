const ModelTodo = require("../Models/TodoModels")

module.exports.SaveDocument = async (req, res) => {


    const { tableData, email } = req.body

    const AllDetail = await ModelTodo.findOne({ email })
    const docArr = AllDetail.document
    const documentArr = [...docArr, ...tableData]

    const AllArr = await ModelTodo.findByIdAndUpdate(AllDetail._id, { document: documentArr })

    return res.send(documentArr)

}