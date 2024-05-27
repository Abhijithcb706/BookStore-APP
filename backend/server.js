import express from 'express'
import mongoose  from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

const app = express()

app.use(cors());
app.use(express.json());




const URI = process.env.mongoUri
const PORT = process.env.PORT||5000
try {
    mongoose.connect("mongodb+srv://abhijithcb706:Abhijith2001@cluster0.i2v48gd.mongodb.net/Bookstore", {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    });
    console.log("mongoDB connected");
} catch (error) { 
    console.log("Error: ", error);
}  

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...11`);
});