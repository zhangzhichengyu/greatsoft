// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './plugins/store.js'
import router from './plugins/router.js'
import resource from './plugins/vue-resource.js'
import great from '@greatsoft/vue-greatsoft'
import '@greatsoft/vue-greatsoft/lib/css/index.style.css'

Vue.use(great)
resource(store, router)

// 加载项目配置
Vue.http.get('static/assets/config.json').then(({data}) => {
  ({'root': Vue.http.options.root} = data)
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    template: '<App/>',
    router,
    store,
    data: { config: data },
    components: { App }
  })
})
