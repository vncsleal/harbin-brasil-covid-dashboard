import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://api.brasil.io/v1/dataset/covid19/caso_full/data/',
  mode: 'no-cors',
  headers: {
    Authorization: `token eb36fc61acba10122bef57c9b1ed9e46770faa13`
  }
});
export default instance;
