import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js';

import itemsRouter from './routes/items.js'
import cookieParser from 'cookie-parser'
dotenv.config()
connectDB()


const app = express()

const port = process.env.PORT || 8000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors());

app.get("/", (req ,res) => {
    res.send(`KUMUSTA MUNDO`)
})
app.use(express.static("Public"))
app.use('/api/items', itemsRouter)


app.listen(port, (req ,res) => {
    console.log(`KUMUSTA MUNDO TUMATAKBO ITO SA PORTE 8000`)
})