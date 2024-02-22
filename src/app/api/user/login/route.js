
import User from "../../../../../models/users";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request) {
    try{
        

        const reqBody = await request.json();
        const {email, password } = reqBody

        const user = await User.findOne({email});
        if(!user){
            return NextResponse.json({error: "User does not Exist!"}, {status: 400});
        }

        const validPassword = await bcryptjs.compare(password, user.password);
        if(!validPassword){
            return NextResponse.json({error: "Invalid Password"}, {status: 400});
        }


        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email,
        }

        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, {expiresIn: "1d"});
        
        const response = NextResponse.json({
            message: "Login Successful",
            success: true,
        });

        response.cookies.set("token", token, {
            httpOnly: true,
        })

        return response;

    } catch(error) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}