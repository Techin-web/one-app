import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.0.140:3232',
});

export default api;
