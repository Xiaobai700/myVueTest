import Vue from 'vue'
import App from './App.vue'
import A from './A.vue'
import myF from './app.js'

new Vue({
    el:'#main',
    template:'<App></App>',
    components:{App},
    methods:{
        f(){
            myF();
        }
    },
    created(){
        this.f();
    }
})
