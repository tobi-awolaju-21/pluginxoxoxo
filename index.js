const axios = require('axios');

const apiKey = 'c0a7daee-7756-eba3-f1cf-6e1ba124ef6d'; // Replace [yourAuthKey] with your actual DeepL API key

const translateText = async () => {
  try {
    const response = await axios.post('https://api.deepl.com/v2/translate', {
      text: ["Hello, world!"],
      target_lang: "DE"
    }, {
      headers: {
        'Authorization': `DeepL-Auth-Key ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    console.log(response.data.translations[0].text);
  } catch (error) {
    console.error('Error translating text:', error.message);
  }
};

translateText();
