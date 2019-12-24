<template>
    <div id="main-b1">
        <p>{{title}}</p>
        <b>{{B1Data.message}}</b>
        <C :CData="CData" @myFunction="sayHi"></C>
        <!--<button @click="sendMessage">发送消息</button>-->
    </div>
</template>

<script>
    import event from '../event.js'
    import C from './C.vue'
    export default {
        name: "B1",
        props:['B1Data','CData'],
        data(){
            return{
                title:'组件B1'
            }
        },
        components:{
            C
        },
        methods:{
            sendMessage(){
                event.$emit("B1-to-B2","hello,B2");
            },
            sayHi(){
                alert("hi");
            }
        }
    }
</script>

<style scoped>
    #main-b1{
        width: 300px;
        height: 300px;
        background-color: aquamarine;
        margin-left: 30px;
    }
</style>
