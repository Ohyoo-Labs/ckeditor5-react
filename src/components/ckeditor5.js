import React, {useState} from 'react';
// NO USAR ALIAS PARA ESTE MODULO. SE IMPORTA ASI
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';
;

const MyEditor = () => {
  const [data, setData] = useState('');

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    console.log(data);
    setData(data);
  }

  return (
    <div>
      <h2>My CKEditor</h2>
      <CKEditor
        editor={Editor}
        data={data}
        onChange={ handleEditorChange }
      />
    </div>
  );
}

export default MyEditor;

