<template>
    <div id="main-b2">
        <p>{{title}}</p>
        <!--<button @click="myFunction">调用父组件A的方法</button>-->
        <p>B1发送的消息：{{receiveData}}</p>
    </div>
</template>

<script>
    import event from '../event.js'
    export default {
        name: "B2",
        data(){
            return{
                title:'组件B2',
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
            },
            myFunction(){
                this.$emit("functionA");
            },
            functionB2(){
                alert("这是组件B2中的方法！");
            }
        },
        mounted() {
            this.receive();
        }
    }
</script>

<style scoped>
    #main-b2{
        width: 300px;
        height: 300px;
        background-color: pink;
        margin-left: 20px;
    }
</style>
