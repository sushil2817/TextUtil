import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log(text);
        let newText = text.toUpperCase();
        setText(newText)
    } 
    const handleLoClick = () =>{
        // console.log(text);
        let newText = text.toLowerCase();
        setText(newText)
    } 
    const handleClearClick = () =>{
        // console.log(text);
        let newText = "";
        setText(newText)
    } 
    const handleOnChange = (event) =>{
        setText(event.target.value)
    } 
     
    const handleCopy = () =>{
      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    
    const handleExtraSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      
    }
    
    const handlePaste = () =>{
      let pasteText = document.getElementById("myBox");
       navigator.clipboard.readText(pasteText.value);
    }
    const [text, setText] = useState('');
    
  return (
    <>
    <div  className='container'> 

        <h1>{props.heading}</h1>

          <div className="mb-3">
              <textarea className="form-control"  value={text} onChange={handleOnChange} id="myBox" rows="8" cols="8"></textarea>
          </div>
             <button className="btn btn-primary " onClick={handleUpClick}>Conver to Upper Case</button>
             <button className="btn btn-primary mx-1 my-2" onClick={handleLoClick}>Conver to Lower Case</button>
             <button className="btn btn-primary mx-0.5 my-1" onClick={handleExtraSpaces}>Remove Extra  Spaces</button>
             <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear </button>
             <button className="btn btn-primary mx-0.5 my-2" onClick={handleCopy}>Copy </button>
             
    </div>

    <div className="container my-3">

      <h1>Your Text Summery</h1>
      <p>{text.split(" ").length-1} words, {text.length} characters</p>
      <p>{0.008 * text.split("").length} Minute to Read</p>
      <h2>Preview</h2>
      <p>{text}</p>

    </div>
    </>
  )
}
 