const mongoose = require('mongoose')
const crypto = require('crypto')
const uuidv1 = require('uuid/v1')

const userSchema = new mongoose.Schema(
    {
        names: {
            type: String,
            trim: true,
            required: true,
        },
        surnames: {
            type: String,
            trim: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },
        birthdate: {
            type: Date,
            default: '01/01/1990',
        },
        email: {
            type: String,
            trim: true,
            unique: true,
        },
        avatar: {
            type: String,
            trim: true,
            default: '',
        },
        banner: {
            type: String,
            trim: true,
            default: '',
        },
        biography: {
            type: String,
            trim: true,
            default: '',
        },
        location: {
            type: String,
            trim: true,
            default: '',
        },
        website: {
            type: String,
            trim: true,
            default: '',
        },
    },
    { 
        timestamps: true, 
    },
)

module.exports = mongoose.model("User", userSchema)