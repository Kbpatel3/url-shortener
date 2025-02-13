import React from 'react';

const ShortenedUrl = ({ ShortenedUrl }) => {
    const backEndUrl = 'http://localhost:5000';
    
    return (
        <div>
            <h2>Shortened URL</h2>
            <a href={`${backEndUrl}/${ShortenedUrl}`} target="_blank" rel="noreferrer">{`${backEndUrl}/${ShortenedUrl}`}</a>
        </div>
    );
};

export default ShortenedUrl;