import path from 'path'
import asyncHandler from '../middlewares/asyncHandler.js';
import Item from '../models/item.js';

const getItem = async (req, res) => {
    try {
        const allItem = await Item.find()
        return res.status(200).json({allItem})
    } catch (error) {
        return res.status(500).json("error")
    }
}

const addItem = asyncHandler(async (req, res) => {
 try {
    const {name} = req.body
    const file = req.file.path;
   
    if(!name) {
       throw new Error("Name is required")
    }

    const existingFile = await Item.findOne({name})

    if(existingFile) {
        return res.json({Status: false, Error: "Already exist"})
    }

    const itemFile = await new Item({name, file}).save();
    return res.status(201).json({Status: true, itemFile})
 } catch (error) {
    return res.status(500).json({Status: false, Erro: "Something went wrong"})
 }
})

const getSingleItem = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params;
        const item = await Item.findById(id)
        if(!item) {
            return res.status(404).json({Status:false, Error: "NOt found"})
        }
        
        return res.status(200).json({Status: true, item})
    } catch (error) {
        console.log(error)
    }
})

const downloadItem = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params;
        const item = await Item.findById(id)
        if(!item) {
            throw new Error("Not found")
        }
        const file = req.file;
        const filePath = path.join(__dirname, `..${file}`)
        return res.download(filePath)
    } catch (error) {
        return res.status(500).json("ERROR")
    }
})

export {getItem, addItem, downloadItem, getSingleItem}