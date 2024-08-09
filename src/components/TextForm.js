import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=> {
    // console.log("uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!", "success");
    }

    
  const handleDownClick = ()=> {
    // console.log("uppercase was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase!", "success");
   }
    
    const handleOnChange = (event)=> {
        // console.log("on change");
        setText(event.target.value)
    }

   const handleCopy =() => {
     var text = document.getElementById("myBox");
     text.select();
     navigator.clipboard.writeText(text.value);
     props.showAlert("Copied to clipboard", "success");
   }

   const handleExtraSpaces =() => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed Extra Spaces", "success");
  }


   

    const [text, setText] = useState('Enter text here2'); 
    // text = "new text"; // wrong way to change state
    // setText("new text") // correct way
  


  return (
      <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743' }}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'  } }  id="myBox" rows="8"></textarea>
        </div> 
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}> convert to uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleDownClick}> convert to lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}> copy text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}> Reemove Extra Spaces</button>
    </div>


     <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743' }}>
      <h2> Your Text Summary </h2>
      <p>{text.split(" ").filter((element)=> element.length!==0 ).length} words and {text.length} characters</p>
      <p> {0.008* text.split(" ").filter((element)=> element.length!==0 ).length} Minutes read </p>
      <h2> Preview</h2>
      <p> {text} </p>
     </div> 

    </>
  )
}
