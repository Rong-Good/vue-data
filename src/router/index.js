import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from './home'
import tao from './tao'


Vue.use(Router)
let tes=[]
console.log(home)
export default new Router({
  routes:tes.concat(home,tao)
})
