import axios from 'axios';

export const API_KEY = process.env.REACT_APP_API_KEY;

export const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
  },
});
