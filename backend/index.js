import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()

dotenv.config()

const PORT = process.env.PORT || 8000

app.use(cors({

}))

app.get("/", (req, res) => {
    res.send("KUMUSTA MUNDO")
})




const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      app.listen(PORT, () => {
        console.log("Server is running in port");
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  start();