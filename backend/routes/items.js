
import express from 'express'
import multer from 'multer'
import path from 'path'


import {addItem, getItem, downloadItem, getSingleItem, deleteItem} from '../controllers/items.js'
const router = express.Router()


// image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Public/Images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage: storage
})
// end image upload


router.route("/").get(getItem).post(upload.single('file'), addItem )
router.route("/:id").get(getSingleItem)
router.route("/:id").delete(deleteItem)
router.route('/download/:id').get(downloadItem)

export default router