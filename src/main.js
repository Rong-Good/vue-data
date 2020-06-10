// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    if(to.meta.de==true){
  
      if(localStorage.getItem("c")!=undefined){
        next()
       
      }
      else{
      
      next(
        {
          path:'/tao'
        }
      )
      }
    }
    next()
    
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
