const { adminService } = require("../service");

const addAdmin = async (req, res) => {
    console.log(req.body);

    try{
        let body = req.body
        let adminExist = await adminService.findAdmin(req.body.name)

        if(adminExist){
            throw new Error('admin already exist')
        }

        let admin = await adminService.addAdmin(body)
        if(!admin){
            throw new Error('admin not added')
        }

        res.status(201).json({
            message: "admin added succesfully", admin
        })
    }catch(err){
        res.status(400).json({
            success: false,
            err: err.message
        })
    }
}

module.exports = { addAdmin }