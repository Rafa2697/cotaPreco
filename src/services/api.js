import axios from "axios";

 const api = axios.create({
    baseURL: 'https://brasilapi.com.br'
  });

  export default api;