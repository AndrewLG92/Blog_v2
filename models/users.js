import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema (
    {
        email: {
            type: String,
            required: [true, "Please provide Email"],
        },
        password: {
            type: String,
            require: [true, "Please provide a password"],
        },
        isVerified: {
            type: Boolean,
            default:false,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        forgotPasswordToken: String,
        forgotPasswordTokenExpiry: Date,
        verifyToken: String,
        verifyTokenExpiry: Date,
    },
    { timestamps: true }
);

const User = models.User || mongoose.model('users', userSchema);

export default User;