const { userService } = require("../services");

const addUser = async (req, res) => {
    console.log(req.body);

    const body = req.body

    let user = await userService.addUser(body)

    res.status(200).json({
        message: 'user create success',
        data: user
    })
}

const getUser = async (req, res) => {

    let user = await userService.getUser()

    res.status(200).json({
        message:'get user success',
        data: user
    })
}

module.exports={addUser , getUser}