import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://api.brasil.io/v1/dataset/covid19/caso_full/data/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
  mode: 'no-cors',
});
export default instance;
