import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8081';


// 添加请求拦截器
// 在发送请求之前做些什么
axios.interceptors.request.use((config) => {
  return config;
});

// 添加相应拦截器
axios.interceptors.response.use((response) => {
  return response;
}, err => {
  return Promise.reject(err);
});

export default axios;