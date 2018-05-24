<template class="bjys ztys">
  <div>
    <div class="center">
      <ul>
        <li>
          <div class="header">
            <h1 class="title1">登录</h1>
            <p>到现有的OrangePlay账户</p> <br>
            <p>用户名</p>
            <Input placeholder="用户名" style="width: 300px" v-model="username"/>
            <p style="margin-top: 10px">密码</p>
            <Input placeholder="密码" type="password" style="width: 300px; color: blue" v-model="password"/><br/>
            <Button @click="login" type="success" size="small" style="margin-top: 5px"><p>登录</p></Button>
            <br/><br/>
            <a>忘记密码？</a>
          </div>
        </li>
        <li>
          <div class="header">
            <h1 class="title2">创建</h1>
            <p>一个免费的OrangePlay账户</p>
            <p>欢迎免费加入及轻松使用。继续创建OrangePlay 帐户<br/>
              并获取 OrangePlay - 适合 PC 和 Mac 玩家的前沿数字解决<br/>
              方案。</p>

            <a href="/#/register">
            <Button type="success" size="small" style="margin-top: 5px"><p>加入OrangePlay</p></Button>
            </a>

          </div>
        </li>
        <li>
          <div class="header">
            <h3 class="title3">为什么加入OrangePlay？</h3>
            <p>购买和下载完整零售游戏</p>
            <p>加入Weplay社区</p>
            <p>游戏时与好友聊天</p>
            <p>在任何电脑上都能玩</p>
            <p>安排游戏、比赛或 LAN 聚会</p>
            <p>获取自动游戏更新以及更多！</p>
            <img src="../assets/login.png"/>
          </div>
        </li>
      </ul>

    </div>
  </div>
</template>

<style lang="scss">
  .center {
    margin: 80px;
    background-color: #163855;
    overflow: hidden;
    p {
      font-size: 15px;
      color: aliceblue;
      margin: 3px;
    }
    .header {
      margin: 20px;
    }
    ul li {
      display: inline-flex;
    }
    .title1 {
      font-size: 35px;
      color: #67c1f5;
    }
    .title2 {
      font-size: 35px;
      color: #67c1f5;
    }
    .title3 {
      font-size: 25px;
      color: #67c1f5;
    }
    .ivu-input {
      letter-spacing: 1px;
    }
  }

  .bjys {
    background-color: rgba(0, 0, 0, 0.2);
  }
  .ztys {
    color: #c6d4df;
  }
</style>

<script>
  import req from '../api/axios'
  export default {
    data() {
      return {
        username : '',
        password : '',
      }
    },
    methods : {
      login() {
        req.post('/user/login', {username : this.username, password: this.password}).then(
          () => {
            this.$router.push('/');
          }
        );
      }
    }
  }
</script>


