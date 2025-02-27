import axios from 'axios'

const api = axios.create({
   baseURL: 'https://api.themoviedb.org/3/',
   params: {
      api_key: 'YOUR_API_KEY',
      language: 'pt-BR',
   },
})

export default api
