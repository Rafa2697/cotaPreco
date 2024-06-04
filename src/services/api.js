// require('dotenv').config()
import axios from "axios";

 const api = axios.create({
    baseURL: 'http://10.0.8.67:3000'
  });

  export default api;