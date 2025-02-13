import { type } from 'os';
import Url from '../models/Url.js';
import { faker } from "@faker-js/faker";


export const createShortUrl = async (req, res) => {
    try {
        // Get the original URL from the request body
        const { url } = req.body;

        if (!url || typeof url !== 'string') {
            return res.status(400).json({ error: 'Invalid URL or missing URL' });
        }

        let shortUrl;
        let isDuplicate = true;

        // Generate a random short URL until a unique one is found
        while (isDuplicate) {
            shortUrl = faker.word.noun();
            const existingUrl = await Url.findOne({ shortUrl });
            if (!existingUrl) isDuplicate = false;
        }

        // Create a new URL document with deletedAt set to 5 minutes from now
        const newUrl = new Url({
            url,
            shortUrl,
            deletedAt: new Date(Date.now() + 5 * 60 * 1000)
        });

        await newUrl.save();
        return res.json( { shortUrl } );

    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

export const redirectToUrl = async (req, res) => {
    try {
        // Get the short URL from the request parameters
        const { shortUrl } = req.params;

        // Find the URL document with the matching short URL
        const urlDoc = await Url.findOne({ shortUrl });

        console.log("URL Document: ", urlDoc);

        // If the URL document is not found, return an error response
        if (!urlDoc) {
            return res.status(404).json({ error: 'URL not found' });
        }

        // Redirect to the original URL
        return res.redirect(urlDoc.url);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};