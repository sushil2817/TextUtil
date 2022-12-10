
import React, {useState} from 'react'

export default function TextForm(props) {

  // For upperCase
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
    } 
    // for lowerCase
    const handleLoClick = () =>{
        
        let newText = text.toLowerCase();
        setText(newText)
    } 
    // for clear Text
    const handleClearClick = () =>{
        let newText = "";
        setText(newText)
    } 
    
    // for extraSpace remove
    const handleExtraSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      
    }
    
    // for copy
    const handleCopy = async() =>{

        setCopyText(text);
       
    }

    // for Paste
    const handlePaste = () =>{

      setText(`${text} ${copyText}`);

      //  navigator.clipboard.readText();
    }

    const handleOnChange = (event) =>{
        setText(event.target.value)
      
    } 
     
    
    const [text, setText] = useState('');
    const [copyText, setCopyText] = useState('');
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
             <button className="btn btn-primary mx-1 my-2" onClick={handlePaste}>Paste</button>
             
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
 

