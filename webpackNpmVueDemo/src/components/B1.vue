<template>
    <div>
        <p>{{message}}</p>
        <button @click="sendMessage">发送消息</button>
    </div>
</template>

<script>
    import event from '../event.js'
    import C from './C.vue'
    export default {
        name: "B1",
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
                event.$emit("B1-to-B2","B1发送的消息");
            }
        }
    }
</script>

<style scoped>

</style>
