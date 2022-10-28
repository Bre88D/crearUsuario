const express = require("express")
const router = express.Router()


//importar modelo
const Product = require("../models/product.model")
const Usuario = require("../models/product.model")

//crear producto
router.post("/create-product", async (req, res) => {

    const newProduct = new Product(req.body)
    await newProduct.save()

    

    return res.status(201).json({msg: "Producto guardado exitosamente"})
})

//eliminar producto
router.delete("/delete-product", async (req, res) =>{

    await Product.finByIdAndDelete(req.query.id)
    return res.sendStatus(200).json({msd: "producto eliminado"})
})

//actualizar producto

//listar productos
router.get("/get-products", async (req, res) => {

    const products = await Product.find()
    return res.status(200).json({data: products})

})



//ejercicio de crear usuarios
// crear usurio
router.post("/create-usuario", async (req, res) => {

    const newUsuario = new Usuario(req.body)
    
    await newUsuario.save()

    return res.status(201).json({msg: "Usuario regristrado correctamente"})
})

//eliminar usuario
router.delete("/delete-usuario", async (req, res) =>{

    await Usuario.finByIdAndDelete(req.query.id)
    return res.sendStatus(200).json({msd: "Usuario eliminado"})
}) 

 //actualizar usuario

 router.put("/udate-usuario", async(req,res) => {
   
    await Usuario.finByIdAndUpdate(req.query.id , (`${set, req,body}`))
    res.status(200).json({msg: "Usuario actualizado"})


 })

//listar Usuarios
router.get("/get-usuario", async (req, res) => {

    const usuario = await Usuario.find()
    return res.status(200).json({data: usuario})

})


//exportar las rutas
module.exports = router
