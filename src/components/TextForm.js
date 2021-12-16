import React, { useState } from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        setText(event.target.value);
        
    }
    const handleUpperCase = () => {
        let newTxt=text.toUpperCase();
        setText(newTxt);
        props.showAlert("Text changed to Uppercase!","success");
    }
    const handleLowerCase = () => {
        let newTxt=text.toLowerCase();
        setText(newTxt);
        props.showAlert("Text changed to Lowercase!","success");
    }
    const handleClear = () => {
        setText('');
        props.showAlert("Text cleared!","success");
    }
    const handleSpaces = () => {
        let newTxt = text.split(/[ ]+/);
        setText(newTxt.join(" "));
        props.showAlert("Extra spaces removed!","success");
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied!","success");
    }  
    
    const words = (text) => {
        let arr= text.split(/[ ]+/);
        console.log(arr);
       if (arr[(arr.length)-1]!=="") {
           return arr.length;
       } else {
           return (arr.length-1)
       }
    }
    

    const [text, setText] = useState('');
    return (
        <>
        <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="my-box" value={text} onChange={handleOnChange}  placeholder={ props.mode==='light'?'Enter yout text here ...':''} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white' }} rows="10"></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-1" onClick={handleUpperCase}>Uppercase</button>
            <button type="button" className="btn btn-primary mx-1" onClick={handleLowerCase}>Lowercase</button>
            <button type="button" className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
            <button type="button" className="btn btn-primary mx-1" onClick={handleSpaces}>Remove Extra Spaces</button>
            <button type="button" className="btn btn-primary mx-1" onClick={handleCopy}>Copy to clipboard</button>
        </div>
        <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
            <h2>Text Summary</h2>
            <h6>{words(text)} words and {text.length} characters</h6>
        </div>
        <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Nothing to preview'}</p>
        </div>
        </>
    )
}
