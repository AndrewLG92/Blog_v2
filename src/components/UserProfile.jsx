"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import '@/styles/userprofile.scss';
import TextParse from "html-react-parser";
import '@ckeditor/ckeditor5-theme-lark';

export default function UserProfile() {

    
    const editorRef = useRef();
    const [editorLoaded, setEditorLoaded] = useState( false );
    const { CKEditor, CustEditor} = editorRef.current || {}

    useEffect(() => {
        editorRef.current = {
            CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
            CustEditor: require('ckeditor5-custom-build'),
        }
        setEditorLoaded( true )
    }, []);

    const [data, setData] = useState('');

    const { data: session } = useSession();

    const textData = () => {
        const objData = TextParse(data);
        const textData = objData.props.children;
        console.log(textData);
        setData('');
    }

    return (
        <div className="container-fluid mt-lg-4 h-auto w-75">
            <div className="row justify-content-between">
                <div className="col-1 card p-3 w-25 mx-auto border-5 shadow-lg">
                    <div className="card-body">
                        <center>
                            <Image alt="Users Icon" className="mi rounded-circle img-thumbnail" src={session?.user?.image} width={60} height={60} />
                            <div className="bar"></div>
                            <div className="card-title">
                                Name: <span>{session?.user?.name}</span>
                            </div>
                            <div className="card-title">
                                Email: <span>{session?.user?.email}</span>
                            </div>
                        </center>
                    </div>
                </div>
                <div className="col-2 card border-5 w-50 shadow-lg mx-auto">
                    <div className="card-body">
                        <div className="card-title">
                            <h3>Enter a Meaningful Quote!</h3>
                        </div>
                        {editorLoaded ? <CKEditor 
                            editor={CustEditor}
                            data={data}
                            onReady={ editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log('Editor is ready to use!', editor);
                            }}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                setData(data);
                            }}
                        /> : <p>Error...</p>}
                        <div className="card-footer">
                            <button className="btn btn-bd-primary text-white" onClick={textData}>Post Quote</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-1 card p-3 w-25 mx-auto border-5 shadow-lg">


                </div>

                <div className="col-2 card border-5 w-50 shadow-lg mx-auto">

                </div>
            </div>
        </div>
    );
}
