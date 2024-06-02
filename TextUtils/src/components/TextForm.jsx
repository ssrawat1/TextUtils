import React, { useState } from "react";

const TextForm = ({ heading, mode, showAlert }) => {
    const [text, setText] = useState('');

    const handleTextChange = (e) => {
        setText(e.target.value);
    }

    const convertToUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        showAlert('Text converted to uppercase.', 'success');
    }

    const convertToLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        showAlert('Text converted to lowercase.', 'success');
    }

    const copyTextToClipboard = () => {
        navigator.clipboard.writeText(text);
        showAlert('Text copied to clipboard.', 'success');
    }

    const removeExtraSpaces = () => {
        let newText = text.trim().replace(/\s+/g, " ");
        setText(newText);
        showAlert('Extra spaces removed from text.', 'success');
    }

    const clearText = () => {
        setText("");
        showAlert('Text has been cleared.', 'success');
    }

    const capitalizeFirstLetterOfWords = () => {
        let newText = text.trim().replace(/\s+/g, " ").split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        setText(newText);
        showAlert('First character of each word capitalized.', 'success');
    }

    const countWords = () => {
        let totalWords = text.split(/\s+/).filter((word) => word.length > 0);
        return totalWords.length;
    }

    return (
        <>
            <h2 className="my-3" style={{ color: mode === 'light' ? 'black' : 'white' }}>{heading}</h2>
            <div className="mb-3 my-3">
                <textarea className="form-control" id="textArea" rows="9" value={text} onChange={handleTextChange} style={{ backgroundColor: mode === 'light' ? 'white' : '#13466e', color: mode === 'light' ? '#042743' : 'white' }}></textarea>
            </div>
            <button onClick={convertToUpperCase} type="button" className="btn btn-primary mx-2" style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}>
                Convert to Uppercase
            </button>
            <button onClick={convertToLowerCase} type="button" className="btn btn-primary mx-2" style={{ backgroundColor: '#28a745', borderColor: '#28a745' }}>
                Convert to Lowercase
            </button>
            <button onClick={capitalizeFirstLetterOfWords} type="button" className="btn btn-primary mx-2" style={{ backgroundColor: '#17a2b8', borderColor: '#17a2b8' }}>
                Capitalize First Letter
            </button>
            <button onClick={copyTextToClipboard} type="button" className="btn btn-primary mx-2" style={{ backgroundColor: '#fd7e14', borderColor: '#fd7e14' }}>
                Copy Text
            </button>
            <button onClick={removeExtraSpaces} type="button" className="btn btn-secondary mx-2" style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}>
                Remove Extra Spaces
            </button>
            <button onClick={clearText} type="button" className="btn btn-secondary mx-2" style={{ backgroundColor: '#dc3545', borderColor: '#dc3545' }}>
                Clear Text
            </button>
            <div className="numberOfChar my-5" style={{ color: mode === 'light' ? '#042743' : 'white' }}>
                <h3>Your Text Summary</h3>
                <h6>Total Words: {countWords()}</h6>
                <h6>Total Chars: {text.length}</h6>
            </div>
            <div className="analyzeText" style={{ color: mode === 'light' ? '#042743' : 'white' }}>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter something to preview it here..."}</p>
            </div>
        </>
    );
};

export default TextForm;
