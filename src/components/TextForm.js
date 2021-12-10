import React, { useState } from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleUpperCase = () => {
        let newTxt=text.toUpperCase();
        setText(newTxt);
    }
    const handleLowerCase = () => {
        let newTxt=text.toLowerCase();
        setText(newTxt);
    }
    const handleClear = () => {
        setText('');
    }
    const handleSpaces = () => {
        let newTxt = text.split(/[ ]+/);
        setText(newTxt.join(" "));
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    }
    

    const [text, setText] = useState('');
    return (
        <>
        <div className="container my-3">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="my-box" value={text} onChange={handleOnChange} placeholder='Enter yout text here ...' rows="10"></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-1" onClick={handleUpperCase}>Uppercase</button>
            <button type="button" className="btn btn-primary mx-1" onClick={handleLowerCase}>Lowercase</button>
            <button type="button" className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
            <button type="button" className="btn btn-primary mx-1" onClick={handleSpaces}>Remove Extra Spaces</button>
            <button type="button" className="btn btn-primary mx-1" onClick={handleCopy}>Copy to clipboard</button>
        </div>
        <div className="container">
            <h2>Text Summary</h2>
            <h6>{text.split(' ').length} words and {text.length} characters</h6>
        </div>
        <div className="container my-3">
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
