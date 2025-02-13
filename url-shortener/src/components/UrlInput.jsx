import React from 'react';

const UrlInput = ({ inputValue, setInputValue }) => {
    return (
        <input 
            type="text" 
            placeholder="Full URL (e.g. https://www.google.com)" 
            style={{
                width: '100%',
                padding: '10px',
                fontSize: '16px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                boxSizing: 'border-box'
            }}
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
        />
    );
};

export default UrlInput;