const { userService } = require("../services")

// add user
const addUser = async (req, res) =>{
    // console.log(req.body);
    try{
        let body = req.body
        let emailExist = await userService.findUserEmail(req.body.email)

       if(emailExist){
        throw new Error ('email must be unique')
       }

       let user = await userService.addUser(body)

       if(!user){
        throw new Error('user not added')
       }

       res.status(201).json({
        message: 'user created successfully',
        user
       })
    }catch(err){
        res.status(400).json({
            success: false, err: err.message
        })
    }

}

// get user
const getUser = async (req, res) => {
    try{
        let user = await userService.getUser()
        if(!user){
            throw new Error('user not found')
        }

        res.status(200).json({
            message: 'user get successfully',
            data: user
        })

    }catch(err){
        res.status(400).json({
            success: false, err: err.message
        })
    }
}

// delete user
const deleteUser = async (req, res) => {
    try{
        let {id} = req.params;
        console.log(id);

        let userExist = await userService.findUser(id)

        if(!userExist){
            res.status(400).json({
                message:'user not found'
            })
        }

        let user = await userService.deleteUser(id)

         if(!user){
            throw new Error('user not deleted')
        }

        res.status(200).json({
            message: 'user delete successfullt',user
        })
    } catch (err) {
        console.log(err, 'err');
    }
}

// update user
const updateUser = async (req, res) => {
    try{
        let body = req.body;
        let {id} = req.params;

        if(!body || !id){
            throw new Error('user not get')
        }

        const userExist= await userService.findUser(id)
        if(!userExist){
            res.status(400).json({
                message:'user not found'
            })
        }

        const user = await userService.updateUser(body, id);

         if(!user){
            throw new Error('user not update')
        }
        
         res.status(200).json({
            message: "user updated successfully",
            data: user
         });

    }catch(err){
        res.status(400).json({
            success: false, err: err.message
        })
    }
}

module.exports = {addUser, getUser, deleteUser, updateUser}