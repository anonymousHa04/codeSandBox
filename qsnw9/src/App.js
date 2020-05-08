import React, { useState } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "react-html-parser";
import axios from "axios";

function App() {
  const [value, setValue] = useState("");

  const handleOnChange = (event, editor) => {
    const data = editor.getData();
    // console.log( { event, editor, data } );
    setValue(data);
  };

  const submit = () => {
    // console.log(value);
    const payLoad = value;
    axios({
      url: "http://localhost:8080/api/prac/save",
      method: "POST",
      data: payLoad
    })
      .then(() => {
        console.log("Data gyao");
        console.log(payLoad);
        alert("data send");
        this.resetUserInputs();

        //  this.getBlogPost();
      })
      .catch(err => {
        console.log("kand ho gayo" + err);
      });
  };
  return (
    <div className="container">
      {/* <h1>jevhdjve</h1> */}
      <CKEditor editor={ClassicEditor} onChange={handleOnChange} />
      <div>{ReactHtmlParser(value)}</div>
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default App;
