// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Customers from './components/Customers'
import About from './components/About'
import Add from './components/Add'
//import VueResource from 'vue-resource'
import CustomerDetails from './components/CustomerDetails.vue'
import Edit from './components/Edit.vue'
import Axios from 'axios'


Vue.config.productionTip = false
//初始化组件
Vue.use(VueRouter)
//Vue.use(VueResource)
Vue.prototype.$http = Axios

//设置路由
const router = new VueRouter({
  mode: "history",
  //获取当前文件所在目录的完整路径名
  base: __dirname,
  //路由路径
  routes: [{
      path: "/",
      component: Customers
    },
    {
      path: "/about",
      component: About
    },
    {
      path: "/add",
      component: Add
    },
    {
      path: "/customer/:id",
      component: CustomerDetails
    },
    {
      path: "/edit/:id",
      component: Edit
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  //ES6模板字符串
  template: `
  <div id="app">
      <nav class="navbar navbar-default">
           <div class="container">
             <div class="navbar-header">
               <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                 <span class="sr-only">Toggle navigation</span>
                 <span class="icon-bar"></span>
                 <span class="icon-bar"></span>
                 <span class="icon-bar"></span>
               </button>
               <a class="navbar-brand" href="#">用户管理系统</a>
             </div>
             <div id="navbar" class="collapse navbar-collapse">
               <ul class="nav navbar-nav">
                 <li><router-link to="/">主页</router-link></li>
                 <li><router-link to="/about">关于我们</router-link></li>
               </ul>

               <ul class="nav navbar-nav navbar-right">
                 <li><router-link to="/add">添加用户</router-link></li>

               </ul>
             </div><!--/.nav-collapse -->
           </div>
         </nav>
    <router-view></router-view>
  </div>
 `
  //当Vue实例中没有el属性时，手动挂载到appDOM对象中
}).$mount("#app")
