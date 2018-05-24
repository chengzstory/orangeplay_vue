<template>
  <div class="game_info">
    <div class="game_name">{{gameInfo.name}}</div>
    <div class="game_banner">
      <game-banner style="width: 620px" v-if="show" :photos="gameInfo.imgUrls"></game-banner>
      <game-review v-bind="gameInfo"></game-review>
    </div>
    <div class="game_info_desc">
      <div>
        <div class="game_area_purchase">
          <span class="purchase_game_name"><strong>购买 {{gameInfo.name}}</strong></span>

          <div class="purchase_game_action">
            <div class="purchase_action_bg">
              <div class="game_purchase_price">{{gameInfo.price | format_price}}</div>
              <div class="btn_addtocart"><a @click="addCart" class="btn_medium">加入购物车</a></div>
            </div>
          </div>
        </div>

        <game-desc :content="gameInfo.content" style="margin-top: 30px"></game-desc>

        <div class="game_config_title">系统需求:</div>
        <div v-html="gameInfo.config" style="margin-bottom: 10px">
          {{gameInfo.config}}
        </div>
      </div>

      <div class="similar_game_area">
        <h2>更多类似产品</h2>
        <a class="small_cap" v-for="game in sameGames" :key="game.name" @click="jump(game.gameId)">
          <img :src="game.mainImg">
          <h4><strong>{{game.name}}</strong></h4>
          <div style="line-height: 15px;color:#67c1f5;">{{game.price | format_price}}</div>
        </a>
      </div>
    </div>
  </div>
</template>



<script>
  import gameBanner from '@/components/banner/gameBanner'
  import gameReview from '@/components/banner/gameReview'
  import gameDesc from '@/components/gameInfo/item/gameDesc'
  export default {
    components : { gameBanner, gameReview, gameDesc },
    data() {
      return {
        gameInfo: {
          reviews: [],
        },
        sameGames: [],
        show: false
      }
    },
    mounted() {
      const id = this.$route.params.gameId;
      this.$req.get("/game/recent/" + id);
      this.$req.get("/game/id/" + id).then((res) => {
        this.gameInfo = res.data.data;
        this.show = true;
      });
      this.$req.get("/game/sames/" + id).then(res => {
        this.sameGames = res.data.data;
      });

    },
    methods: {
      addCart() {
        this.$req.get('/user/addCartItem/' + this.gameInfo.gameId).then(res => {
          this.$message({type: 'success', message: '加入购物车成功', duration: 1500});
        });
      },
      jump(id) {
        this.$router.push('/gameInfo/' + id);
      }
    },
    watch: {
      '$route': function (to, from) {
        const id = this.$route.params.gameId;
        this.$req.get("/game/recent/" + id);
        this.$req.get("/game/id/" + id).then((res) => {
          this.gameInfo = res.data.data;
          this.show = true;
        });
        this.$req.get("/game/sames/" + id).then(res => {
          this.sameGames = res.data.data;
        });
      }
    }

  }
</script>


<style scoped>
  .game_name {
    margin: 30px 0 10px 0;
    font-size: 20px;
    font-weight: bold;
    color: cornflowerblue;
  }
  .game_banner {
    display: flex;
    box-shadow: 0 0 7px 0px #000;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.6);
    width: max-content;
  }
  .game_info {
    width: 950px;
  }
  .game_config_title {
    color: whitesmoke;
    font-size: 18px;
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 15px;
  }
  .game_area_purchase {
    background: linear-gradient(135deg, rgba(97, 100, 101, 0.3) 0%, rgba(226, 244, 255, 0.3) 100%);
    padding: 20px;
    position: relative;
  }
  .purchase_game_name {
    font-size: 20px;
    color: aliceblue;
  }
  .game_purchase_price {
    font-size: 13px;
    padding-left: 12px;
    padding-right: 12px;
    height: 20px;
    color: beige;
    background-color: black;
  }
  .btn_addtocart {
    position: relative;
  }
  .btn_medium {
    border-radius: 2px;
    border: none;
    padding: 3px;
    display: inline-block;
    cursor: pointer;
    text-decoration: none !important;
    color: #D2E885 !important;
    background: linear-gradient( to bottom, rgba(121,153,5,1) 5%, rgba(83,105,4,1) 95%);
  }
  .purchase_action_bg {
    height: 32px;
    vertical-align: bottom;
    display: inline-block;
    background-color: black;
    padding: 2px 2px 2px 0px;
    border-radius: 2px;
    font-size: 0;
  }
  .purchase_action_bg > * {
    font-size: 15px;
    display: inline-block;
    margin-left: 2px;
    vertical-align: middle;
  }
  * {
    padding: 0;
    margin: 0;
  }

  .purchase_game_action {
    right: 16px;
    bottom: -17px;
    left: 16px;
    white-space: nowrap;
    text-align: right;
    position: absolute;
  }

  .similar_game_area {
    width: 200px;
    height: 700px;
    margin-left: 150px;
  }
  .small_cap {
    display: inline-block;
    height: 130px;
    padding: 15px;
    border: 1px solid rgba(0, 0, 0, 0);
    background-color: rgba(0, 0, 0, 0.2);
  }
  .small_cap:hover {
    border: 1px solid #67c1f5;
  }
  h2 {
    color: aliceblue;
    margin-bottom: 10px;
  }
  img {
    float: left;
    width: 170px;
    height: 79px;
  }

  .game_info_desc {
    display: flex;
    margin-top: 30px;
  }

  .game_info {
    margin-left: 300px;
  }

  h4 {
    font-size: 13px;
    font-weight: normal;
    color: #8f98a0;
    width: 171px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: 0px;
  }

</style>


