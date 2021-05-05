import axios from 'axios';

export const API_KEY = process.env.REACT_APP_API_KEY;

export const instance = axios.create({
  baseURL: 'https://api.weatherapi.com/v1',
});
