<template>
  <div id="app">
    <top :nickname="nickname" :avatar="avatar" :count="count"></top>
    <router-view/>
    <bottom></bottom>
  </div>
</template>

<script>
  import top from '@/components/top'
  import bottom from '@/components/bottom'
  export default {
    name: 'App',
    components: {
      top, bottom
    },
    data() {
      return {
        nickname: '',
        avatar: '',
        count: 0
      }
    },
    methods: {
      topInit() {
        this.$req.get('user/nickname').then(res => {
          this.nickname = res.data.data;
        });
        this.$req.get('user/avatar').then(res => {
          var avatar = res.data.data;
          if (avatar === '' || avatar === null) {
            avatar = 'static/default.jpg';
          } else {
            avatar = 'http://localhost:8090/' + avatar;
          }
          this.avatar = avatar;
        });
        this.$req.get('user/cart/count').then(res => {
          this.count = res.data.data;
        })
      }
    },
    mounted() {
      this.topInit();
    },
    watch: {
      '$route' (to, from) {
        this.topInit();
      }
    }
  }

</script>

<style lang="scss">
  @import 'style/common';

  body {
    background-color: #183F59;
    font-family: Tahoma,Helvetica,Arial,'宋体',sans-serif;
  }


</style>
