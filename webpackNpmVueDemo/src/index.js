import Vue from 'vue'
import App from './App.vue'
import A from './A.vue'
import myF from './app.js'

new Vue({
    el:'#main',
    template:'<A></A>',
    components:{A},
    methods:{
        f(){
            myF();
        }
    },
    created(){
        //this.f();
    }
})
