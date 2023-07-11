import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("button clicked");
        let upperCaseValue = text.toUpperCase();
        setText(upperCaseValue);
        props.showAlert("Converted to upper case", "success");
    }

    const handleLowClick = () => {
        //console.log("button clicked");
        let lowerCaseValue = text.toLowerCase();
        setText(lowerCaseValue);
        props.showAlert("Converted to lower case", "success");
    }

    const handleClear = ()=> {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared", "success");
    }

    const handleCopy = ()=> {
        var newText = document.getElementById('myBox');
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied to clipboard", "success");
    }

    const handleExtraSpaces = ()=> {
        var newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }

    const hanldeOnChange = (event) => {
        //console.log("onChange");
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={hanldeOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className='btn btn-secondary mx-2' onClick={handleClear}>Clear</button>
                <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
                <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove extra spaces</button>
            </div>
            <div className='container my-2'>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length}</p>
                <p>{.008 * text.split(" ").length} minutes read</p>
            </div>
        </>

    )
}
