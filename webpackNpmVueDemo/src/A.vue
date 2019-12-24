<template>
    <div id="main-a">
        <p>{{title}}</p>
        <B1 :B1Data="B1Data" :CData="CData"></B1>
        <B2 ref="componentB2" @functionA="functionA"></B2>
        <button class="btn" @click="myFunction">调用B2中的方法</button>
        <button class="btn" @click="sendDataToC">传递数据给组件C</button>
    </div>
</template>

<script>
    import B1 from './components/B1.vue'
    import B2 from './components/B2.vue'
    import vueList from './components/vueList.vue'
    import event from './event.js'
    export default {
        name: "A",
        components:{
            B1,B2,vueList
        },
        data(){
            return {
                title:'组件A',
                B1Data:{
                    message:'组件A给组件B1的数据'
                },
                CData:{
                    message:'组件A给组件C的数据'
                },
                dataToC:'组件A给组件C的数据 vue busEvent',

            }
        },
        methods:{
            sendMessage(){
                this.$refs.componentB1.sendMessage("B1发送的消息！");
            },
            functionA(){
                alert("这是组件A中的方法！");
            },
            myFunction(){
                this.$refs.componentB2.functionB2();
            },
            sendDataToC(){
                event.$emit('sendDataToC',this.dataToC);
            }
        }
    }
</script>

<style scoped>
    #main-a{
        margin-top: 20px;
        padding-top: 20px;
        width: 800px;
        height: 400px;
        background-color: antiquewhite;
        margin-left: 400px;
        display: flex;
    }

    .btn{
        width: 140px;
        height: 20px;
    }
</style>
