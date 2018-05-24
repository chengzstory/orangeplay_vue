<template>
  <div class="top" style="height: 100px;background-color: #222">
    <img src="../assets/logo.jpg"/>
    <div class="header">
      <div class="shop">
        <router-link to="/">商城</router-link>
      </div>
      <auto-search
        style="width: 300px" :keyword="keyword"
        placeholder="搜索商店" ref="child">
      </auto-search>
      <div>
        <el-button type="primary" @click="$refs.child.jump()" size="small" class="search-btn">搜索</el-button>
      </div>

      <router-link to="/cart">
        <el-badge :value="count">
          <span class="icon-cart icon"/>
        </el-badge>
      </router-link>

      <div class="right">
        <router-link to="/login" v-if="nickname === null" class="no-user-login">登录</router-link>
        <el-dropdown trigger="click" v-else>
            <span class="el-dropdown-link username">
              {{nickname}}<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <router-link to="/order">
                <el-dropdown-item class="clearfix" >
                  <span>我的订单</span>
                </el-dropdown-item>
              </router-link>

              <router-link to="/userinfo">
                <el-dropdown-item class="clearfix" >
                 <span>个人资料</span>
                </el-dropdown-item>
              </router-link>

              <el-dropdown-item class="clearfix">
                <span @click="outlogin">退出登录</span>
              </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
      </div>
      <router-link to="/userinfo">
        <Avatar :src="avatar" />
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
  img {
    width: 90px;
    height: 50px;
    float: left;
    margin-top: 30px;
    margin-left: 280px;
  }
  .header {
    display: flex;
    padding-top: 40px;
    .shop {
      margin: auto 30px;
      font-size: 16px;
      font-weight: bold;
    }
    .search-btn {
      margin-left: 10px;
    }
    .right {
      margin: auto 40px;
      .no-user-login {
        color: #b8b6b4;
        font-size: 14px;
      }
      .no-user-login:hover {
        color: #ffffff;
      }
      .username {
        color: #b8b6b4;
        font-size: 16px;
      }
      .username:focus {
        color: #ffffff;
      }
    }
    .icon-cart {
      background-image: url(/static/cart.png);
    }
    .icon {
      display: inline-block;
      height: 24px;
      width: 24px;
      margin-left: 100px;
      margin-top: 4px;
    }
  }
</style>

<script>
  import autoSearch from '@/components/search/autoSearch'
  export default {
    components: {autoSearch},
    props: ['nickname', 'count', 'avatar'],
    data() {
      return {
        keyword: '',
      }
    },
    methods : {
      outlogin() {
        this.$req.get('user/logout').then(res => {
          this.$router.push('/login');
        })
      },
    },
  }
</script>
