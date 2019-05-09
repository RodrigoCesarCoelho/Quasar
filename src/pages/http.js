import axios from 'axios'

export const http = axios.create({
  baseURL: 'http://localhost:56610/api/v2/'
  // baseURL: 'http://apiagricohml.zember.com.br/api/'
})

export default http
