<template>
  <div class="bjys ztys">
    <top></top>
    <div class="center">
      <ul>
        <li>
          <div class="header">
            <h1 class="title1">创建账户</h1>

            <p>创建 OrangePlay 用户名称</p>
            <Input class="input" v-model="username" @on-blur="check_username()" size="small"/>
            <span v-if="show0">{{msg[0]}}</span>

            <p>请输入昵称</p>
            <Input class="input" v-model="nickname" @on-blur="check_nickname()" size="small"/>
            <span v-show="show1">{{msg[1]}}</span>

            <p>请输入密码</p>
            <Input class="input" v-model="password" size="small" @on-blur="check_password()"/>
            <span v-show="show2">{{msg[2]}}</span>

            <p>请确认密码</p>
            <Input class="input" v-model="password_confirm" size="small" @on-blur="check_password_confirm()"/>
            <span v-show="show3">{{msg[3]}}</span>

            <p>请输入邮件地址</p>
            <Input class="input" v-model="email" size="small" @on-blur="check_email()"/>
            <span v-show="show4">{{msg[4]}}</span>
            <h3 style="color: gray">OrangePlay 将向此帐户发送一封用于确认的电子邮件<br/>请通过邮件中的验证码验证您的 OrangePlay 电子邮件帐户</h3>

            <p>请输入您的手机号</p>
            <Input class="input" v-model="phone" size="small"/>
            <span v-show="show5">{{msg[5]}}</span><br/>

            <Button style="margin-top: 10px" type="success" @click="register()">下一步</Button>
          </div>
        </li>
        <li>
          <div class="header" style="margin-left: 80px">
            <h3 class="title3">为什么加入我们？</h3>
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
    <bottom></bottom>
  </div>

</template>

<style>
  .center {
    margin-top: 20px;
    margin-left: 380px;
    height: auto;
  }
  p {
    font-size: 15px;
    color: aliceblue;
    margin-top: 15px;
  }

  span {
    font-weight:bold;
    color:#ff9955;
  }

  .input {
    width: 200px;
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
  .title3 {
    font-size: 25px;
    color: #67c1f5;
  }
  body {
    background-color: #183F59;
    font-family: "微软雅黑",Arial,sans-serif;
  }

</style>

<script>
  import top from '@/components/top'
  import bottom from '@/components/bottom'
  export default {
    components: {
      top, bottom
    },
    data() {
      return {
        username: '',
        password: '',
        password_confirm: '',
        nickname: '',
        email: '',
        phone: '',
        show0: false, show1: false, show2: false, show3: false, show4: false, show5: false,
        msg: ['', '', '', '', '', '', ''],
      }
    },
    methods: {
      register() {
        axios.post('http://localhost:8080/user/register', {
          username: this.username,
          password: this.password,
          nickname: this.nickname,
          email   : this.email,
          phone   : this.phone
        }).then((res) => {
          if (!res.data.success) {
            alert(res.data.message);
          } else {
            alert('注册成功');
          }
        })
      },
      check_username() {
        axios.get('http://localhost:8080/user/checkUsername', {
          params: {
            username: this.username
          }
        }).then((res) => {
          this.show0 = false;
          this.msg[0] = res.data.message;
          if (!res.data.success) {
            this.show0 = true;
            this.msg[0] = res.data.message;
          }
        });
      },
      check_nickname() {
        axios.get('http://localhost:8080/user/checkNickname', {
          params: {
            nickname: this.nickname
          }
        }).then((res) => {
          this.show1 = false;
          this.msg[1] = res.data.message;
          if (!res.data.success) {
            this.show1 = true;
            this.msg[1] = res.data.message;
          }
        });
      },
      check_password() {
        axios.get('http://localhost:8080/user/checkPassword', {
          params: {
            password: this.password
          }
        }).then((res) => {
          this.show2 = false;
          this.msg[2] = res.data.message;
          if (!res.data.success) {
            this.show2 = true;
            this.msg[2] = res.data.message;
          }
        });
      },
      check_password_confirm() {
        this.show3 = false;
        this.msg[3] = '';
        if (this.password_confirm != this.password) {
          this.show3 = true;
          this.msg[3] = '两次输入的密码不一致';
        }
      },
      check_email() {
        axios.get('http://localhost:8080/user/checkEmail', {
          params: {
            email: this.email
          }
        }).then((res) => {
          this.show4 = false;
          this.msg[4] = res.data.message;
          if (!res.data.success) {
            this.show4 = true;
            this.msg[4] = res.data.message;
          }
        });
      },
      check_phone() {
        axios.get('http://localhost:8080/user/checkPhone', {
          params: {
            phone: this.phone
          }
        }).then((res) => {
          this.show5 = false;
          this.msg[5] = res.data.message;
          if (!res.data.success) {
            this.show5 = true;
            this.msg[5] = res.data.message;
          }
        });
      }
    }
  }
</script>
