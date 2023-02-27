const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')//used to validate fields
//create a new schema
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
}, {timestamps: true})

//static register method
userSchema.statics.register = async function(email, password) {

    // validation
    //check if email and passwords fields are filled
    if(!email || !password) { 
        throw Error('All fields must be filled')
    }
    //check if email is a valid email
    if(!validator.isEmail(email)) {
        throw Error('Email is not valid')
    }
    //check if password is strong enough
    if(!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough')
    }

    const exists = await this.findOne({ email })

    if(exists) {
        throw Error('Email already exists')
    }
    //hashing users password
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)
    console.log(hashedPassword)

    // storing user to db
    const user = await this.create({ email, password: hashedPassword})

    return user

}

module.exports = mongoose.model('User', userSchema)