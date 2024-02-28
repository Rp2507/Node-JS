// const { adminController } = require("");
const { adminService } = require("../services");

const addAdmin =  async (req, res) => {
    console.log(req.body);

    // let body = req.body

    // let admin = await adminService.addAdmin(body)

    // res.status(201).json({
    //     message:'admin create successfully',
    //     data: admin
    // })

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
            message: "admin added success", admin
        })   }
        catch(err){
            res.status(400).json({
                success: false,
                err: err.message
            })
        }
}
const getAdmin = async (req,res) => {

    let admin = await adminService.getAdmin()
    res.status(200).json({
        message: 'get admin success',
        data: admin
    })
}

module.exports= {addAdmin, getAdmin}