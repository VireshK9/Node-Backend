import dotenv from "dotenv"
import express, { json, urlencoded } from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
const app = express();

dotenv.config({
    path: './.env'
})

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
// json
// urlencoded
// static



app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

export default app;