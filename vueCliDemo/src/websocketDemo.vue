<template>
  <div>
    test
    <h1>{{msg}}</h1>
    请输入：<input v-model="data"/>
    <button @click="sendMessage()">发送</button>
  </div>
</template>

<script>
    export default {
      name: "websocketDemo",
      data(){
        return{
          path:'ws://localhost:8087/websocket/002/001',
          socket:'',
          msg:'',
          data:''
        }
      },
      methods:{
        init: function () {
          if(typeof(WebSocket) === "undefined"){
            alert("您的浏览器不支持socket");
          }else{
            // 实例化socket
            this.socket = new WebSocket(this.path);
            // 监听socket连接
            this.socket.onopen = this.open;
            // 监听socket错误信息
            this.socket.onerror = this.error;
            // 监听socket消息
            this.socket.onmessage = this.getMessage;
          }
        },
        open: function () {
          console.log("socket连接成功")
         // this.send("这是窗口001的消息！")
        },
        error: function () {
          console.log("连接错误")
        },
        getMessage: function (msg) {
          console.log(msg.data)
          this.msg = msg.data;
        },
        send: function (params) {
          this.socket.send(params)
        },
        close: function () {
          console.log("socket已经关闭")
        },
        sendMessage(){
          this.send(this.data);
          this.data = '';
        }
      },
      mounted() {
        this.init();
      },
      destroyed () {
        // 销毁监听
        this.socket.onclose = this.close;
      }
    }
</script>

<style scoped>

</style>
