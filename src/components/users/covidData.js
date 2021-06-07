import axios from '../../axios';

export default function covidDdata() {
  const promise = axios.get('?city=Assis Brasil');
  const dataPromise = promise.then((r) => r.data);
  return dataPromise;
}
