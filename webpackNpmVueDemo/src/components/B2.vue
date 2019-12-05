<template>
    <div>
        <p>{{message}}</p>
        <p>B1发送的消息：{{receiveData}}</p>
    </div>
</template>

<script>
    import event from '../event.js'
    export default {
        name: "B2",
        data(){
            return{
                message:'组件B2',
                receiveData:''
            }
        },
        components:{
        },
        methods:{
            receive(){
                event.$on("B1-to-B2",(data) => {
                    this.receiveData = data;
                });
            }
        },
        mounted() {
            this.receive();
        }
    }
</script>

<style scoped>

</style>
