import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://api.brasil.io/v1/dataset/covid19/caso_full/data/',
  headers: {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  }
});
export default instance;
