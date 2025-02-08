import express from 'express';
import cors from 'cors';
import instagramGetUrl from 'instagram-url-direct';
import gifted from 'gifted-dls'

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// Constants
const PORT = 8000;
const SUCCESS_STATUS = 200;
const ERROR_STATUS = 500;
const BAD_REQUEST_STATUS = 400;

// Root Route
app.get('/', (req, res) => {
    res.status(SUCCESS_STATUS).send('Hello from the server.');
});

// Instagram URL Processing Route
app.post('/instagram', async (req, res) => {
    const { url } = req.body;
    
    if (!url) {
        return res.status(BAD_REQUEST_STATUS).json({error: 'URL is required' });
    }
    
    try {
        const data = await instagramGetUrl(url);
        res.status(SUCCESS_STATUS).json({data});
    } catch (error) {
        console.error('Error fetching Instagram URL:', error);
        res.status(ERROR_STATUS).json({error: 'Failed to process the Instagram URL' });
    }
});

// Facebook URL Processing Route
app.post('/facebook', async (req, res) => {
    const { url } = req.body;
    
    if (!url) {
        return res.status(BAD_REQUEST_STATUS).json({error: 'URL is required' });
    }
    
    try {
        let data = await gifted.giftedfbdl(url)
        res.status(SUCCESS_STATUS).json({ data });
    } catch (error) {
        console.error('Error fetching Facebook URL:', error);
        res.status(ERROR_STATUS).json({error: 'Failed to process the Facebook URL' });
    }
});

// Tiktok URL Processing Route
app.post('/tiktok', async (req, res) => {
    const { url } = req.body;
    
    if (!url) {
        return res.status(BAD_REQUEST_STATUS).json({error: 'URL is required' });
    }
    
    try {
        let data = await gifted.giftedtiktok(url)
        res.status(SUCCESS_STATUS).json({ data });
    } catch (error) {
        console.error('Error fetching Tiktok URL:', error);
        res.status(ERROR_STATUS).json({ error: 'Failed to process the Tiktok URL' });
    }
});


// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});