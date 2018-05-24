<template>
  <div style="margin-bottom: 120px">
    <div class="kinds">
      <span class="popular-tag-title">浏览分类</span>
      <ul>
        <li v-for="item in kinds" @click="jumpTag(item.name)">
          <span class="popular-tag-name">{{item.name}}</span>
        </li>
      </ul>

      <span class="recent-view-title">最近浏览</span>
      <ul>
        <li v-for="item in recents" @click="jumpGame(item.gameId)">
          <span class="recent-game-name">{{item.name}}</span>
        </li>
      </ul>
    </div>

    <div class="center">
        <div class="recommend">
          <p> 精选和推荐 </p>
          <home-banner style="width: 940px"></home-banner>
        </div>

        <div class="free" style="margin-top: 60px">
          <p> 免费游戏 </p>
          <free-banner style="width: 940px"></free-banner>

        </div>

      <div class="btm">
        <ul style="display: inline-flex">
          <li>
            <router-link to="/home/popularGames">
              <el-button id="btn" type="success" size="small" plain>热销与热门商品</el-button>
            </router-link>
          </li>
          <li>
            <router-link to="/home/toOnlineGames">
              <el-button type="success" style="margin-left: 20px" size="small" plain>高分商品</el-button>
            </router-link>
          </li>
        </ul>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .popular-tag-name, .recent-game-name {
    color: #66c0f4;
    font-size: 13px;
    font-family: "Motiva Sans", Sans-serif;
    font-weight: bold;
    margin-bottom: 3px;
    display: block;
    width: 200px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .popular-tag-name:hover, .recent-game-name:hover {
    color: whitesmoke;
    cursor: pointer;
  }

  p {
    color: #fff;
    font-size: 17px;
    margin-bottom: 3px;
  }

  .popular-tag-title, .recent-view-title {
    color: whitesmoke;
    font-size: 14px;
  }

  .recent-view-title {
    display: block;
    margin-top: 10px;
  }

  .center {
    margin-top: 10px;
    margin-left: 30px;
    float: left;
  }

  .kinds {
    float: left;
    margin-left: 120px;
    margin-top: 30px;
    width: 12%;
  }

  .btm {
    margin-top: 40px;
    margin-bottom: 40px;
  }



</style>

<script>
  import bottom from '@/components/bottom'
  import homeBanner from '@/components/banner/homeBanner'
  import customNav from '@/components/nav'
  import freeBanner from '@/components/banner/freeBanner'
  import gameCap from '@/components/gameCap'

  import req from '../api/axios'
  export default {
    components : {
      bottom, homeBanner, customNav, freeBanner, gameCap
    },
    data() {
      return {
        kinds : [
          {name : '动作'}, {name : '冒险'}, {name : '搞笑'},
          {name : '休闲'}, {name : '奇幻'}, {name : '角色扮演'},
          {name : '单人'}, {name : '第一人称射击'}, {name: '开放世界'}, {name: '黑色幽默'}, {name: '原声音乐'}
        ],
        recents: [],
        recommends : [],
        frees : [],
        populars: [],
        qualities: [],
        show: false
      }
    },
    methods: {
      jumpTag(tag) {
        this.$router.push('/tagGames/' + tag);
      },
      jumpGame(gameId) {
        this.$router.push('/gameInfo/' + gameId);
      }
    },
    mounted() {
      document.getElementById('btn').click();

      this.$req.get('/game/recents').then(res => {
        this.recents = res.data.data;
      })
    }
  }
</script>
