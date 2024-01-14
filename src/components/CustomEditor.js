// components/custom-editor.js

import React from 'react';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build";

export default function CustomEditor( props ) {

    const HandleOnChange = (event, editor) => {
        const data = editor.getData();
    }

    return (
        <CKEditor
            editor={ Editor }
            onChange={HandleOnChange}
            
        />
    )
}


