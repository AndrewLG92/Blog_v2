"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import '@/styles/userprofile.scss';

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
        console.log(data);
        setData('');
    }

    return (
        <div className="container-fluid mt-lg-4 h-auto w-75 bg-black">
            <div className="row gap-5">
                <div className="col-1 card p-3 w-25">
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
                <div className="col card w-auto">
                    <div className="card-body">
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
                        <button onClick={textData}>Click Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
