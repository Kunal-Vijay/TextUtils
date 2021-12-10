import React, { useState } from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleUpClick = () => {
        let newTxt=text.toUpperCase();
        setText(newTxt);
    }
    const handleLoClick = () => {
        let newTxt=text.toLowerCase();
        setText(newTxt);
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className="container my-3">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} placeholder='Enter yout text here ...' rows="10"></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Click to Uppercase</button>
            <button type="button" className="btn btn-primary mx-1" onClick={handleLoClick}>Click to Lowercase</button>
        </div>
        <div className="container">
            <h2>Text Summary</h2>
            <h6>{text.split(' ').length} words and {text.length} characters</h6>
            <h6>{0.008* text.split(' ').length} minutes needed to read</h6>
        </div>
        <div className="container">
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
