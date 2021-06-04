import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://api.brasil.io/v1/dataset/covid19/caso_full/data/',
  headers: {
    'Access-Control-Allow-Origin': 'https://api.brasil.io',
    'Content-Type': 'application/json',
  },
  mode: 'no-cors',
  withCredentials: true,
  credentials: 'same-origin',
});
export default instance;
