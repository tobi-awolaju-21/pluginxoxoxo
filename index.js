const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 8081;

// Middleware to enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allow the GET, POST, and OPTIONS methods
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); // Allow the specified headers
  next();
});

// Endpoint to handle translation requests
app.get('/', async (req, res) => {
  try {
    // Extract text and target_lang from query parameters
    const { text, target_lang } = req.query;
    
    if (!text || !target_lang) {
      return res.status(400).send('Please provide text and target_lang parameters');
    }

    // Replace [yourAuthKey] with your actual DeepL API key
    const authKey = 'c0a7daee-7756-eba3-f1cf-6e1ba124ef6d';

    // Translation function
    const translateText = async () => {
      try {
        const response = await axios.post(
          'https://api.deepl.com/v2/translate',
          {
            text: [text], // Use the text from the query parameter
            target_lang // Use the target_lang from the query parameter
          },
          {
            headers: {
              'Authorization': `DeepL-Auth-Key ${authKey}`,
              'Content-Type': 'application/json'
            }
          }
        );

        res.send(response.data.translations[0].text);
      } catch (error) {
        console.error('Error translating text:', error.message);
        res.status(500).send('Error translating text');
      }
    };

    // Call the translation function
    await translateText();
  } catch (error) {
    console.error('Error processing request:', error.message);
    res.status(500).send('Error processing request');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
