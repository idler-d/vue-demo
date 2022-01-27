import axios from '@/api/index'

export function login() {
  console.log(111111)
  return axios.post('/api/login');
}