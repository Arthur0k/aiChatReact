import axios from 'axios'
import env from '@/common/global/env'
const { chatApi } = env

const service = axios.create({
  baseURL: `${chatApi}`,
  timeout: 60000, // request timeout
  // withCredentials: true,
  crossDomain: true
})

// 设置默认请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Accept'] = 'application/json, text/plain, */*'


// http request 拦截器
service.interceptors.request.use(
  config => {
    // 设置请求超时时间
    if (config.timeout) {
      service.defaults.timeout = config.timeout
    }
    const ss = { ...config }
    if (config.method === 'post') {
      ss.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
    }
    return ss
  },
  error => Promise.reject(error)
)

// http response 拦截器
service.interceptors.response.use(
  response => {
    return response
  },
  err => {
    return Promise.reject(err)
  }
)

export default {
  get(url, param, headers) {
    // get请求
    return new Promise((resolve, reject) => {
      service({
        method: 'get',
        url,
        params: param,
        headers
      })
        .then(
          res => {
            resolve(res.data)
          },
          err => {
            reject(err)
          }
        )
        .catch(error => {
          reject(error)
        })
    })
  },
  post(url, param, headers, timeout) {
    // post请求
    return new Promise((resolve, reject) => {
      service({
        method: 'post',
        url,
        data: param,
        headers,
        timeout: timeout || 50000
      })
        .then(
          res => {
            resolve(res.data)
          },
          err => {
            reject(err)
          }
        )
        .catch(error => {
          reject(error)
        })
    })
  }
}
