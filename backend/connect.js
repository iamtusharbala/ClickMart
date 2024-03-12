import mongoose from "mongoose";


const connect = () => {
    mongoose.connect(process.env.DB_URI)
        .then(() => console.log('DB connected successfully...'))
        .catch((err) => console.log('Error connecting to DB', err))
}

export default connect
