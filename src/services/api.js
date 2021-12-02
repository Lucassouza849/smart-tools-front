import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://smarttools-1638417877322.azurewebsites.net/'
})

export default api;