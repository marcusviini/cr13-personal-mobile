import axios from 'axios'

const api = axios.create({
  baseURL: 'http://138.204.203.177:3333'
})

export { api }