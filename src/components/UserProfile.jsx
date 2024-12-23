"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import '../styles/userprofile.scss';
//import TextParse from "html-react-parser";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function UserProfile() {

    const router = useRouter();
    const [data, setData] = useState('');
    const { data: session, status } = useSession();

    if(status === 'unauthenticated') {
        router.push('/login');
    }

    

    

    const textData = () => {
        //const objData = TextParse(data);
        //const textData = objData.props.children;
        //console.log(textData);
        console.log(data);
        setData('');
    }

    

    return (
        <div className="container-fluid mt-lg-4 h-auto w-75">
            <div className="row justify-content-between">
                <div className="col-1 card p-3 w-25 mx-auto border-5 shadow-lg">
                    <div className="card-body">
                        <center>
                            {session?.user?.image && (<Image alt="Users Icon" className="mi rounded-circle img-thumbnail" src={session?.user?.image} width={60} height={60} /> )}
                            <div className="bar"></div>
                            <div className="card-title">
                                Name: <span>{session?.user?.name}</span> <br></br>
                                Email: <span>{session?.user?.email}</span>
                            </div>
                            <div className="card-title">
                                
                            </div>
                        </center>
                    </div>
                </div>
                <div className="col-2 card border-5 w-50 shadow-lg mx-auto">
                    <div className="card-body">
                        <div className="card-title">
                            <h3>What's going on in your head?</h3>
                        </div>
                    
                        <div className="card-footer">
                            <button className="btn btn-bd-primary text-white" onClick={textData}>Post Quote</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-1 align-self-start card p-3 w-25 mx-auto border-5 shadow-lg">
                    <div className="list-group w-50 mx-auto">
                        <button type="button" className="list-group-item list-group-item-action active" aria-current="true">
                            My Post
                        </button>
                    </div>
                </div>

                <div className="col-2 align-self-end card border-5 w-50 shadow-lg mx-auto">
                    <div className="card-header">
                        <div className="container d-flex flex-row-reverse gap-3">
                            <button className="rounded-3 bg-red btn"><i className="bi bi-trash p-2 i-color"></i></button>
                            <button className="rounded-3 bg btn"><i className="bi bi-pencil-square p-2 i-color"></i></button>
                        </div>
                    </div>
                    <div className="card-body">
                    </div>
                </div>
            </div>
        </div>
    );
    
}
