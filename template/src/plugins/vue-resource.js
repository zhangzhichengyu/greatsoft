import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
export default (store, router) => {
  // 全局设置拦截器
  Vue.http.interceptors.push((request, next) => {
    // 请求携带 cookie
    // request.credentials = true
    request.headers.set('Content-Type', 'application/json; charset=UTF-8')
    // if (window.authToken) {
    //   request.headers.set('x-auth-token', window.authToken)
    // }
    if (!request.timeout || request.timeout === 0) {
      // 设置请求超时时间
      request.timeout = 3 * 60 * 1000
    }
    store.dispatch('showLoading')

    next((response) => {
      store.dispatch('hideLoading')
      // if (response.headers.get('x-auth-token')) {
      //   window.authToken = response.headers.get('x-auth-token')
      // }
      let {data, status, statusText} = response
      if (typeof data === 'string') data = JSON.parse(data)
      let {code, message} = data || {code: 1, message: data}
      if (code && code !== 0) {
        if (code === 2) {
          router.replace({path: '/login'})
        } else {
          store.dispatch('showAlert', {msg: message})
        }
        response.ok = false
        response.status = 'bhgx_500'
        response.statusText = message
      } else if (status !== 200) {
        store.dispatch('showAlert', {msg: '数据加载出错，请联系系统管理员！<br/>错误代码：' + status + '，  错误信息：' + statusText})
      } else {
        ({result: response.data = data} = data)
      }
    })
  })
}
