import React from 'react';

const ShortenedUrl = ({ shortenedUrl }) => {
    const backEndUrl = 'http://localhost:5000';
    
    return (
        <div>
            <h2>Shortened URL</h2>
            <a href={`${backEndUrl}/${shortenedUrl}`} target="_blank" rel="noreferrer">{`${backEndUrl}/${shortenedUrl}`}</a>
        </div>
    );
};

export default ShortenedUrl;