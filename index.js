
const express = require('express');
const app = express();
// Replace [yourAuthKey] with your actual DeepL API key
const PORT = process.env.PORT || 8081;


app.get('/', async (req, res) => {
  const authKey = 'c0a7daee-7756-eba3-f1cf-6e1ba124ef6d';
  const translateText = async () => {
    try {
      const response = await axios.post('https://api.deepl.com/v2/translate', {
        text: ["Hello, world! my guys"],
        target_lang: "DE"
      }, {
        headers: {
          'Authorization': `DeepL-Auth-Key ${authKey}`,
          'Content-Type': 'application/json'
        }
      });

      console.log(response.data.translations[0].text);
    } catch (error) {
      console.error('Error translating text:', error.message);
    }
  };

  
translateText();

});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

