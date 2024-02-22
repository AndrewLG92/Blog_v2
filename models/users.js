import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema (
    {
        username: {
            type: String,
            require: [true, "Please provide Username"],
            unique: [true, "Must be unique"],
        },
        email: {
            type: String,
            required: [true, "Please provide Email"],
        },
        password: {
            type: String,
            require: [true, "Please provide a password"],
        },
    },
    { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);

export default User;