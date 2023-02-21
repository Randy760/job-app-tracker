import axios from 'axios';

export default axios.create({
    baseURL: 'https://eee5-2601-647-5f01-2700-e967-5c15-4ec6-3a5c.ngrok.io',
    headers: { "ngrok-skip-browser-warning" : "true" }
});