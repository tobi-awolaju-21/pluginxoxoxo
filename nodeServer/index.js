// Importing the axios library
const axios = require('axios');

// Function to fetch data from the specified URL
async function fetchData() {
  try {
    // Making an HTTP GET request to the URL
    const response = await axios.get('https://www.reddit.com.json');

    // Returning the response data
    return response.data;
  } catch (error) {
    // Handling errors, if any
    console.error('Error fetching data:', error);
    throw error;
  }
}

// Calling the fetchData function and handling the returned promise
fetchData()
  .then(data => {
    console.log('Response from Reddit API:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
