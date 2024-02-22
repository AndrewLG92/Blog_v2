import { connectMongoDB } from "../../../../../lib/userdb";
import User from "../../../../../models/users";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export async function POST(req) {

    try {
        await connectMongoDB();

        const {username, email, password } = await req.json();

        const exists = await User.findOne({$or: [{ email }, { username }] });

        if(exists){
            return NextResponse.json({error: "User already exists"}, {status: 400});
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        await User.create({username,email,password:hashedPassword});

        return NextResponse.json({message: "User Created Successfully"}, {status: 201})
    } catch (error){
        console.log("Error while registering user.", error);
        return NextResponse.json({message: "Error occured while registering User"}, {status: 500});
    }
}