import Vue from 'vue'
import Router from 'vue-router';
Vue.use(Router)

//定义路线组件 也可以从其他文件引入
const Page1 = { template: '<div>这是页面1</div>' }
const Page2 = { template: '<div>这是页面2</div>' }
//定义一些路线 每个路由应该映射到一个组件
const routes = [
    { path: '/page1', component: Page1 },
    { path: '/page2', component: Page2 }
]
//创建路由器实例
const router = new Router({
    routes // short for `routes: routes`
})

export default router;
