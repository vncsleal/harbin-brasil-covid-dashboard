import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://api.brasil.io/v1/dataset/covid19/caso_full/data/',
  withCredentials: true
  
  /* mode: 'no-cors', */
});
export default instance;
