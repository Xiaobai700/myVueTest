<template>
    <div>
        <B1 ref="componentB1"></B1>
        <B2 @send="sendMessage"></B2>
    </div>
</template>

<script>
    import B1 from './components/B1.vue'
    import B2 from './components/B2.vue'
    export default {
        name: "A",
        components:{
            B1,B2
        },
        methods:{
            sendMessage(){
                this.$refs.componentB1.sendMessage("B1发送的消息！");
            }
        }
    }
</script>

<style scoped>

</style>
