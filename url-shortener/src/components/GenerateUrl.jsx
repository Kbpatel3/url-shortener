import React, { useState } from 'react';

const GenerateUrl = ({ inputValue, setShortenedUrl }) => {
    const [loading, setLoading] = useState(false);

    const handleGenerateClick = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:5000/shorten', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url: inputValue }),
            });
            const data = await response.json();
            setShortenedUrl(data.shortUrl);
        } catch (error) {
            console.error('Error generating shortened URL:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button onClick={handleGenerateClick} disabled={loading}>
                {loading ? 'Generating...' : 'Generate Shortened URL'}
            </button>
        </div>
    );
};

export default GenerateUrl;
