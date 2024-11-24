import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"


import authRoute from "./routes/auth.routes.js"
import userRoute from "./routes/user.routes.js"
import postRoute from "./routes/post.route.js"
import notificationRoute from "./routes/notification.route.js"

import connectMongoDB from "./db/connectMongoDb.js"
import {v2 as cloudinary} from "cloudinary";
dotenv.config()

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express()
const PORT = process.env.PORT || PORT

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(cookieParser());

app.use("/api/auth",authRoute); 
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute);
app.use("/api/notifications",notificationRoute)


app.listen(PORT,() =>{
  console.log(`Server is running on ${PORT}`)
  connectMongoDB();
})