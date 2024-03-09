// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./connectdb.js";
import app from './server.js'
dotenv.config({
    path: './.env'
})



connectDB()
.then(() => {
    app.listen(process.env.PORT || 9000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})