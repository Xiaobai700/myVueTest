<template>
    <div>
        <p>{{message}}</p>
    </div>
</template>

<script>
    export default {
        name: "C",
        data(){
            return{
                message:'组件C'
            }
        },
        methods:{
            sayWhat(){
                this.$emit("myFunction");
            }
        },
        created() {
            this.sayWhat();
        }
    }
</script>

<style scoped>

</style>
