import express from "express";
import dotenv from "dotenv"
import connect from "./connect.js";
import router from "./routes/route.js";
import cors from "cors"
const app = express()
dotenv.config({ path: './config.env' })



// Read request JSON body
app.use(express.json())


// CORS enable
app.use(cors())

// Connect to MongoDB database
connect()

// Routes
app.use('/api/v1', router)


app.listen(process.env.PORT, () => {
    console.log(`App running on port ${process.env.PORT}`);
})