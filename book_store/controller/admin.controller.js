const { adminService } = require("../service");

const addAdmin = async (req, res) => {
    console.log(req.body);

    try{
        let body = req.body
        let adminExist = await adminService.findAdmin(req.body.name)

        let emailExist = await adminService.findEmail(req.body.email)

        if(emailExist){
            throw new Error('email must be unique')
        }

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

const getAdmin = async (req, res) => {
        try{
            let admin = await adminService.getAdmin()

            if(!admin){
                throw new Error("admin not found")
            }

            res.status(200).json({
                message: "admin get successfully",
                admin
            })
        }catch(err){
            res.status(400).json({
                success: false,
                err: err.message
            })
        }
}

// delete admin
const deleteAdmin = async (req, res) =>{

    try{
        let { id } = req.params;
        console.log(id);

        let adminExist = await adminService.findAdminId(id)

        if(!adminExist){
            res.status(400).json({
                message: 'admin not found'
            })
        }

        let admin = await adminService.deleteAdmin(id)
        res.status(200).json({
            message: 'admin delete successfully',
            admin
        })

    }catch(err){
        console.log(err);
    }

}

module.exports = { addAdmin, getAdmin, deleteAdmin }