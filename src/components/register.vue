<template>
  <div>
    <div class="center">
      <ul>
        <li>
          <div class="header">
            <h1 class="title1">创建账户</h1>
            <p>创建 OrangePlay 用户名称</p>
            <Input class="input" v-model="username" @on-blur="check_username()" size="small"/>

            <p>请输入昵称</p>
            <Input class="input" v-model="nickname" @on-blur="check_nickname()" size="small"/>

            <p>请输入密码</p>
            <Input class="input" v-model="password" type="password" size="small" @on-blur="check_password()"/>

            <p>请确认密码</p>
            <Input class="input" v-model="password_confirm" type="password" size="small" @on-blur="check_password_confirm()"/>

            <p>请输入邮件地址</p>
            <Input class="input" v-model="email" size="small" @on-blur="check_email()"/>
            <h4 style="color: gray">OrangePlay 将向此帐户发送一封用于确认的电子邮件<br/>请通过邮件中的验证码验证您的 OrangePlay 电子邮件帐户</h4>

            <p>请输入您的手机号</p>
            <Input class="input" v-model="phone" size="small"/>

            <br/>
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

    <Modal v-model="modal" :styles="{top: '180px'}">
      <email :code="code" :email="email" @updateCode="update"></email>
      <div slot="footer">
        <Button type="info" size="large" @click="submit">提交</Button>
      </div>
    </Modal>
  </div>
</template>

<style scoped>
  .center {
    margin: 50px auto;
    width: 1000px;
    overflow: hidden;
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
</style>

<script>
  import req from '../api/axios'
  import email from '@/components/email'
  export default {
    components : {
      email
    },
    data() {
      return {
        username: '',
        password: '',
        password_confirm: '',
        nickname: '',
        email: '',
        phone: '',
        modal: false,
        code: '',
      }
    },
    methods: {
      register() {
        this.modal = true;
        console.log(this.email);
      },
      check_username() {
        // req.get('/user/checkUsername', this.username);
      },
      check_nickname() {
        // req.get('/user/checkNickname', this.nickname);
      },
      check_password() {
        // req.get('/user/checkPassword', this.password);
      },
      check_password_confirm() {
        if (this.password_confirm != this.password) {
          this.$message.warning('两次输入的密码不一致!');
        }
      },
      check_email() {
        // req.get('/user/checkEmail', this.email);
      },
      submit() {
        req.get('/user/validate', {code: this.code, email: this.email}).then(() => {
          req.post('user/register', {
            username: this.username,
            password: this.password,
            nickname: this.nickname,
            email   : this.email,
            phone   : this.phone
          }).then(res => {
            this.$router.push('/');
          });
        })
      },
      update(code) {
        this.code = code;
      }
    }
  }
</script>
