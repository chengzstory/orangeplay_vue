<template>
  <div class="validate_div">
    <Button v-show="show" type="success" @click="sendMail">  获取验证码  </Button>
    <Button v-show="!show" type="success">重新发送({{count}} s)</Button>
  </div>
</template>

<style>
  .validate_div {
    margin-left: 10px;
    width: 80px;
  }
</style>

<script>
  export default {
    props: ['email'],
    data(){
      return {
        show: this.fetch('show') == null ? true : false,
        count: this.fetch('count') == null ? 60 : this.fetch('count'),
        timer: this.initTimer()
      }
    },
    methods: {
      sendMail() {
        this.show = false;
        this.count = this.fetch('count') == null ? 60 : this.fetch('count');
        this.initTimer();

        this.$req.get('/user/sendMail/' + this.email);
      },
      initTimer() {
        this.show = false;
        if (!this.timer) {
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= 60) {
              this.count--;
            } else {
              this.show = true;
              window.sessionStorage.clear();
            }
          }, 1000)
        }
        return this.timer;
      },
      fetch(key) {
        return JSON.parse(window.sessionStorage.getItem(key));
      },
      save(key, val) {
        window.sessionStorage.setItem(key, JSON.stringify(val));
      }
    },
    watch : {
      count : {
        handler(count) {
          this.save('count', count);
        }
      },
      show : {
        handler(show) {
          this.save('show', show);
        }
      },
      timer : {
        handler(timer) {
          this.save('timer', timer);
        }
      }
    }
  }
</script>
