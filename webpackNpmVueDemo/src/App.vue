<template>
    <div>
        <p>{{message}}</p>
        <p>
            <router-link to="/page1">页面1</router-link>
            <router-link to="/page2">页面2</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "App",
        data(){
            return{
                message:'测试!'
            }
        },
        methods:{
        },
        created() {
        },
        mounted() {
        },
        destroyed() {
        }
    }
</script>

<style scoped>

</style>
