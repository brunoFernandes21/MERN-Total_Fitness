const User = require('../models/userModel')


//login user
const loginUser = async (request, response) => {
    response.json({ mssg: 'login user'})
}
//register user
const registerUser = async (request, response) => {
    const { email, password } = request.body

    try {
        const user = await User.register(email, password)

        response.status(200).json({ email, user})
    } catch (error) {
        response.status(400).json({error: error.message})
    }
}

module.exports = { loginUser, registerUser }