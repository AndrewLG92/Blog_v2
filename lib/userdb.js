import mongoose from "mongoose";

export const connectMongoDBng = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI_USERS);
        console.log("Connected to MONGODBng");
    } catch (error) {
        console.log("Erro connecting to database: ", error);
    }
}