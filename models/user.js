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
        hashed_password: {
            type: String,
            required: true,
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

// control virtuals fields
userSchema
    .virtual("password")
    .set((password) => {
        this._password = password
        this.salt = uuidv1()
        this.hashed_password = this.encryptPassword(password)
    })
    .get(() => {
        return this._password
    })

// schemas methods
userSchema.methods = {
    authenticate: (plaintext) => {
        return this.encryptPassword(plaintext) === this.hashed_password
    },
    encryptPassword : (password) => {
        if(!password) return ""
        try {
            return crypto
                .createHmac('sha1', this.salt)
                .update(password)
                .digest('hex')
        } catch(e) {
            return ""
        }
    }
}

module.exports = mongoose.model("User", userSchema)