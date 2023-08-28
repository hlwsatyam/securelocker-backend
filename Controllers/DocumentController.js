const ModelTodo = require("../Models/TodoModels")

module.exports.SaveDocument = async (req, res) => {

    const { tableData, Email } = req.body

    const AllDetail = await ModelTodo.findOne({ email: Email })
    // console.log(tableData)
    const docArr = AllDetail.document
    const documentArr = [...docArr, tableData]

    const AllArr = await ModelTodo.findByIdAndUpdate(AllDetail._id, { document: documentArr })
    return res.send(documentArr)

}

module.exports.GetAllDocument = async (req, res) => {
    const { Email } = req.body

    const AllDetail = await ModelTodo.findOne({ email: Email })
    console.log('AllDetail')
    // console.log(AllDetail.document)
    return res.send(AllDetail.document)

}