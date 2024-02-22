import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema (
    {
        email: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            require: true,
        },
    },
    { timestamps: true }
);

const GoogleUser = models.User || mongoose.model('User', userSchema);

export default GoogleUser;