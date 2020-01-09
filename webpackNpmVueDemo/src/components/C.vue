<template>
    <div id="main-c">
        <p>{{title}}</p>
        <!--<b>{{CData.message}}</b>-->
        <br/>
        <!--<b>{{getDataFromA}}</b>-->
    </div>
</template>

<script>
    import event from '../event.js'
    export default {
        name: "C",
        props:['CData'],
        data(){
            return{
                title:'组件C',
                getDataFromA:''
            }
        },
        methods:{
            sayWhat(){
                this.$emit("myFunction");
            }
        },
        created() {
           // this.sayWhat();
        },
        mounted() {
            event.$on('sendDataToC',(data)=>{
                this.getDataFromA = data;
            });
        }
    }
</script>

<style scoped>
    #main-c{
        width: 200px;
        height: 200px;
        background-color: red;
        margin-left: 20px;
    }
</style>
