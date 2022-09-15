import axios from 'axios';


const URL_BASE = process.env.REACT_APP_API_URL;

const api = axios.create({ URL_BASE })

export default api;