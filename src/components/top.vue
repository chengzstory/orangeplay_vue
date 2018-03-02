<template>
  <div class="top" style="height: 100px;background-color: #222">
    <img src="../assets/logo.jpg"/>
    <ul>
      <li style="margin-left: 30px"><a href="#">商城</a></li>
      <li style="margin-left: 20px"><Input placeholder="Search" v-model="input" style="width: 150px"/></li>
      <li><Button type="warning" icon="search"></Button></li>

      <li v-if="user == null" style="margin-left: 300px">
        <a href="#">登录</a>
        <a href="#">注册</a>
      </li>

      <li v-else style="margin-left: 300px">
        <a href="#" style="color: #FF9900">{{user.username}},您好</a>
        <a href="#">购物车</a>
        <a onclick="outlogin()">退出</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  img {
    width: 90px;
    height: 50px;
    float: left;
    margin-top: 30px;
    margin-left: 280px;
  }
  ul {
    padding-top: 40px;
    font-size: 16px;
  }
  li {
    display: inline-block;
  }
  a {
    margin-left: 25px;
  }
</style>

<script>
  export default {
    data() {
      return {
        user : {username : 'orangePlay'},
        input : ''
      }
    },
    methods : {
      search() {

      },
      outlogin() {

      }
    }
  }
</script>
