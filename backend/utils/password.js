import bcrypt from "bcrypt"


// To Hash a password
export const passwordHash = (password) => {
    try {
        const saltRounds = 10;
        const hashedPassword = bcrypt.hashSync(password, saltRounds);
        return hashedPassword
    } catch (error) {
        console.log(error);
    }

}

// To compare password
export const comparePassword = async (hashedPassword, password) => {
    const res = bcrypt.compareSync(password, hashedPassword)
    console.log(res);
    if (res) {
        return true
    }
    return false
}
