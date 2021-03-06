/**
 * axios全局配置
 */
import axios from 'axios'

// import router from '../router'
// import { Message } from 'element-ui'

var getTokenLock = false,
  CancelToken = axios.CancelToken,
  requestList = []

/**
 * 阻止短时间内的重复请求
 * @param {string} url - 当前请求地址
 * @param {function} c - 中断请求函数
 * @description 每个请求发起前先判断当前请求是否存在于RequestList中，
 *              如果存在则取消该次请求，如果不存在则加入RequestList中，
 *              当请求完成后500ms时，清除RequestList中对应的该请求。
 */
function stopRepeatRequest (url, c) {
  for (let i = 0; i < requestList.length; i++) {
    if (requestList[i] == url) {
      c()
      return
    }
  }
  requestList.push(url)
}

// 超时设置
const service = axios.create({
  timeout: 5000                  // 请求超时时间
})

// request 拦截器
service.interceptors.request.use(
  config => {
    if (sessionStorage.getItem('userToken')) {
      config.headers.common['token'] = sessionStorage.getItem('userToken') // 让每个请求携带token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// http response 拦截器
// 针对响应代码确认跳转到对应页面
service.interceptors.response.use(
  response => {
    for (let i = 0; i < requestList.length; i++) {
      if (requestList[i] == response.config.url) {
        // 注意，不能保证500ms必定执行，详情请了解JS的异步机制
        setTimeout(function () {
          requestList.splice(i, 1)
        }, 500)
        break
      }
    }
    return Promise.resolve(response.data)
  },
  error => {
    if (axios.isCancel(error)) {
      return Promise.reject('Ajax Abort: 该请求在axios拦截器中被中断')
    } else if (error.response) {
      switch (error.response.status) {
        case 401:
          // router.push('error/401')
          break;
        case 403:
          // router.push('error/403')
          break;
        default:
          // Message({
          //   message: `服务器错误！错误代码：${error.response.status}`,
          //   type: 'error'
          // })
      }
      return Promise.reject(error.response.data)
    }
  }
)

export default service
