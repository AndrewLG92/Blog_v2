import { connectMongoDBng } from "../../../../../lib/userdb";
import User from "../../../../../models/users";
import {NextResponse} from 'next/server';
import bcrypt from 'bcryptjs';

export async function POST(req){
    try {
        await connectMongoDBng();
        const {username,email,password} = await req.json();
        const exists = await User.findOne({$or: [{email},{username}]});
        if(exists){
            return (
                NextResponse.json({message: "Username or email already Exists"},{status: 500})
            );
        }
        const hashedPW = await bcrypt.hash(password, 10);
        await User.create({username,email,password:hashedPW});
        return NextResponse.json({message: "User registed."}, {status: 201});
    } catch (error) {
        console.log("Error while registering user.", error);
        return NextResponse.json({message: "Error occured while registering the user."},
        {status: 500})
    }
}