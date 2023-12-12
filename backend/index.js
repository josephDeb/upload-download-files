import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js';

import itemsRouter from './routes/items.js'

dotenv.config()
connectDB()


const app = express()

const port =  8000;

app.use(express.json())
app.use(cors(
    {
        origin: ["https://upload-download-files-g8oe.vercel.app/"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
        }
));

app.get("/", (req ,res) => {
    res.send(`KUMUSTA MUNDO`)
})
app.use(express.static("Public"))
app.use('/api/items', itemsRouter)


app.listen(port, (req ,res) => {
    console.log(`KUMUSTA MUNDO TUMATAKBO ITO SA PORTE 8000`)
})