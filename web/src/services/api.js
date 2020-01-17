import axios from 'axios';

const api = axios.create({
    basuURL: 'http://localhost:3333'
});

export default api;