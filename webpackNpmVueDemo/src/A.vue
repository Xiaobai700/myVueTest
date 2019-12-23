<template>
    <div>
        <B1 :b1-data="B1Data" ref="componentB1"></B1>
        <B2 @send="sendMessage"></B2>
        <vue-list></vue-list>
    </div>
</template>

<script>
    import B1 from './components/B1.vue'
    import B2 from './components/B2.vue'
    import vueList from './components/vueList.vue'
    export default {
        name: "A",
        components:{
            B1,B2,vueList
        },
        data(){
            return {
                B1Data:{
                    message:"A-B1"
                }
            }
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
