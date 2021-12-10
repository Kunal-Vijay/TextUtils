import React, { useState } from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleOnClick = () => {
        let newTxt=text.toUpperCase();
        setText(newTxt);
    }

    const [text, setText] = useState('Enter text here');
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} rows="10"></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleOnClick}>Click to Uppercase</button>
        </div>
    )
}
