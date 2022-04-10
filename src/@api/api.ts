import axios from 'axios';

export const API_KEY = process.env.REACT_APP_API_KEY;
export const API_URL = 'https://api.themoviedb.org/3';

export const instance = axios.create({
  baseURL: API_URL,
  params: {
    api_key: API_KEY,
    // language: 'uk-UA',
  },
});
