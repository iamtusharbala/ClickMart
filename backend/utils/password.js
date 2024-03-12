import bcrypt from "bcrypt"
import User from "../models/User.js";
const saltRounds = 10;


// To Hash a password
export const passwordHash = (password) => {
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    return hashedPassword
}


export const comparePassword = async (data, password) => {
    const userPasswordfromDB = data.password
    console.log(password, userPasswordfromDB);
    const res = bcrypt.compareSync(password, userPasswordfromDB)
    console.log(res);
    if (res) {
        return true
    }
    return false
}
