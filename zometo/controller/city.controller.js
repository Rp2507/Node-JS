const { cityService } = require("../services");

// const addCity = async (req, res) => {
//     console.log(req.body);

//     const body = req.body
//     const city = await cityService.addCity(body)

//     res.status(201).json({
//         messge: 'city added success',
//         city
//     })
// }

const addCity = async (req, res) => {
    try{
        let body = req.body
        let cityExist = await cityService.findCity(req.body.city_name)

        if(cityExist){
            throw new Error('city already exist!')
        }

         const city = await cityService.addCity(body)
         if(!city){
            throw new Error('city not added')
         }

        res.status(201).json({
        message: 'city added success',
        city
    })
    }
    catch(err){
        res.status(400).json({
            success: false,
            err: err.message
        })
    }

}


module.exports = {addCity}