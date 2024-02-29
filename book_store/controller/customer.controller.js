const { customerService } = require("../service")

// add cus
const addCustomer = async (req, res) => {
    console.log(req.body);
    try{
        let body = req.body
        let customerExist = await customerService.findCustomer(req.body.mobile)

        if(customerExist){
            throw new Error('mobile number must be unique')
        }

        let customer = await customerService.addCustomer(body)

        if(!customer){
            throw new Error('customer not added')
        }

        res.status(201).json({
            message: "customer added successfully",
            customer
        })
    }
    catch(err){
        res.status(400).json({
            success: false,
            err: err.message
        })
    }
}

// get cus
const getCustomer = async (req,res) =>{
    try{
        let customer = await customerService.getCustomer()
        if(!customer){
            throw new Error('customer not found')
        }
        res.status(200).json({
            message: 'customer get successfully', customer
        })
    }catch(err){
        res.status(200).json({
            success: false,
            err: err.message
        })
    }
}

// delete cus
const deleteCustomer = async (req, res) => {
    try{

        let {id} = req.params
        console.log(id);

        let customerExist = await customerService.findCustomerId(id)
        if(!customerExist){
            res.status(400).json({
                message: 'customer not found'
            })
        }

        let customer = await customerService.deleteCustomer(id)
        res.status(200).json({
            message: 'customer delete successfully', customer
        })

    }catch(err){
        console.log(err);
    }
}

module.exports= {addCustomer, getCustomer, deleteCustomer}