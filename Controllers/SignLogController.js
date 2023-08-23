const ModelTodo = require("../Models/TodoModels")
const bcrypt = require('bcryptjs')
module.exports.Login = async (req, res) => {
    const { name, email, password } = req.body.User
    const Existence = await ModelTodo.findOne({ email })
    if (!Existence) {
        return res.send('Register Please')
    } else {
        const PassIsCorrect = bcrypt.compareSync(password, Existence.password)
        
        if (PassIsCorrect) {
            return res.send('Success')
        } else {
            return res.send('Worng Password')
        }
    }
}
module.exports.Signup = async (req, res) => {
    const { name, email, password } = req.body.User

    const Existence = await ModelTodo.findOne({ email })

    if (!Existence) {
        const hashpass = bcrypt.hashSync(password)


        const user = new ModelTodo({
            name, email
            , password: hashpass,
            text: []
        })

        try {
            const savedUser = await user.save()
            return res.send('Success')
        } catch (error) {
            return res.send('Something Else Error')
        }
    } else {
        return res.send('Duplicate!')
    }

}