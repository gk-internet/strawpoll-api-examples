const axios = require('axios');

const content_id = 'rae5gcp1'; // Example (https://strawpoll.com/rae5gcp1)
const api_key = 'PUT_YOUR_API_KEY_HERE_(OPTIONAL)';

// GET poll results

axios.get('https://strawpoll.com/api/poll/' + content_id)
	.then((response) => {
        // handle success
        console.log(response.data.content);
    })
    .catch((error) => {
        // handle error
        console.log(error);
    })

// POST create poll

axios.post('https://strawpoll.com/api/poll',
    {
        "poll": {
            "title": "Test",
            "answers": ["1", "2", "3"]
        }
    },
    {
        headers: 
            {
            	'Content-Type': 'application/json',
            	'API-KEY': api_key
            }
        
    })
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error);
    });

