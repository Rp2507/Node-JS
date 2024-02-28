const { categorieService } = require("../services");

const addCategorie = async (req, res) => {
    console.log(req.body);

    const body = req.body
    const categorie = await categorieService.addCategorie(body)

    res.status(201).json({
        message:'create categorie success',
        data: categorie
    })
}

const getCategorie = async(req, res) => {
    const categorie = await categorieService.getCategorie()

    res.status(200).json({
        message:'get categorie success',
        data: categorie
    })
}

module.exports = {addCategorie , getCategorie}