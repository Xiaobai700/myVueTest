<template>
    <div>
        <p>{{message}}</p>
        <p>{{B1Data.message}}</p>
       <!-- <C @myFunction="sayHi"></C>-->
        <button @click="sendMessage">发送消息</button>
    </div>
</template>

<script>
    import event from '../event.js'
    import C from './C.vue'
    export default {
        name: "B1",
        props:['B1Data'],
        data(){
            return{
                message:'组件B1'
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

</style>
