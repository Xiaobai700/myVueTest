import Vue from 'vue'
import App from './App.vue'
import A from './A.vue'
import myF from './app.js'
import router from './router'
/*import Router from 'vue-router';
Vue.use(Router)

//定义路线组件 也可以从其他文件引入
const Foo = { template: '<div>这是页面1</div>' }
const Bar = { template: '<div>这是页面2</div>' }
//定义一些路线 每个路由应该映射到一个组件
const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
]
//创建路由器实例
const router = new Router({
    routes // short for `routes: routes`
})*/

new Vue({
    el:'#main',
    router,
    template:'<A></A>',
    components:{A,App},
    methods:{
        f(){
            myF();
        }
    },
    created(){
        //this.f();
    }
})
