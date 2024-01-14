"use client";

import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Editor({text}) {
    const [content, setContent] = useState(0);

    const handleOnChange = (event, editor) => {
        const data = editor.getData();
        setContent(data);
    }

    const handleOnReady = (editor) => {
        console.log("Editor is ready to use!", editor);
    }

    return (
        <div>
            <CKEditor
                editor={ ClassicEditor }
                onChange={handleOnChange}
                onReady={handleOnReady}
                test={()=> text(content)}
            />
        </div>
    );
};
