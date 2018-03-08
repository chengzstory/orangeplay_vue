<template>
  <div style="margin-bottom: 120px">
    <div class="kinds">
      <ul style="color: red">
        <p style="color: #67c1f5">浏览分类</p>
        <li v-for="item in kinds">
          {{item.name}}
        </li>
      </ul>
    </div>

    <div class="center">
        <div class="recommend">
          <p> 精选和推荐 </p>
          <div class="swiper">
            <custom-swiper></custom-swiper>
          </div>
        </div>

        <div class="free" style="margin-top: 35px">
          <p> 免费游戏 </p>
          <div class="swiper">
            <custom-swiper></custom-swiper>
          </div>
        </div>

      <div class="btm">
        <ul style="display: inline-flex">
          <li style="margin: 0">
            <router-link :to="{path : '/home/popularGames', query : {games : popularGames}}">
              <Button id="btn">热销与热门商品</Button>
            </router-link>
          </li>
          <li style="margin: 0">
            <router-link :to="{path : '/home/toOnlineGames', query : {games : toOnlineGames}}">
              <Button onclick="">即将推出</Button>
            </router-link>
          </li>
        </ul>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style scoped>
  li {
    color: #67c1f5;
    margin-left: 20px;
    margin-top: 15px;
    font-size: 14px;
  }

  p {
    color: #fff;
    font-size: 17px;
    letter-spacing: 4px;
    margin-bottom: 3px;
  }

  .center {
    margin-top: 10px;
    float: left;
  }

  .kinds {
    float: left;
    margin-left: 120px;
    margin-top: 30px;
    width: 12%;
  }
  .swiper {
    height: 350px;
    width: 940px;
  }

  .btm {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .ivu-btn {
    background-color: #183F59;
    color: #67c1f5;
    border: none;
  }
  .ivu-btn:hover {
    background-color: rgb(234, 234, 234);
    color: #2965A5;
  }

</style>

<script>
  import bottom from '@/components/bottom'
  import customSwiper from '@/components/customSwiper'
  import customNav from '@/components/nav'
  export default {
    components : {
      bottom, customSwiper, customNav
    },
    data() {
      return {
        kinds : [
          {name : '动作'}, {name : '冒险'}, {name : '益智'},
          {name : '策略'}, {name : '恐怖'}, {name : '暴力'},
          {name : 'FPS'}, {name : 'RPG'}
          ],
        imgs : [
          {src:'/static/1.jpg', href: ''},
          {src:'/static/2.jpg', href:''},
          {src:'/static/3.jpg', href:''},
          {src:'/static/4.jpg', href:''},
          {src:'/static/5.jpg', href:''}
        ],
        popularGames : [
          {name : 'Pit People', img : '/static/1.jpg', price : '88元', tags : ['动作', '冒险', '益智', '策略']},
          {name : 'Dota2', img : '/static/2.jpg', price : '88元', tags : ['动作', '冒险', '益智', '策略']},
          {name : 'LoL', img : '/static/3.jpg', price : '88元', tags : ['动作', '冒险', '益智', '策略']},
          {name : 'MHXY', img : '/static/4.jpg', price : '88元', tags : ['动作', '冒险', '益智', '策略']},
        ],
        toOnlineGames : [
          {name : 'Dota2', img : '/static/2.jpg', price : '88元', tags : ['动作', '冒险', '益智', '策略']},
          {name : 'Pit People', img : '/static/1.jpg', price : '88元', tags : ['动作', '冒险', '益智', '策略']},
          {name : 'MHXY', img : '/static/4.jpg', price : '88元', tags : ['动作', '冒险', '益智', '策略']},
          // {name : 'LoL', img : '/static/3.jpg', price : '88元', tags : ['动作', '冒险', '益智', '策略']},
        ]
      }
    },
    mounted() {
      document.getElementById('btn').click();
    }
  }
</script>
