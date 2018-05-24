<template>
  <swiper :options="swiperOption" class="home-banner">
      <swiper-slide v-for="(game,index) in games" :key="index">
        <div class="home-banner-item" @click="jumpGame(game.gameId)">
          <img :src="game.mainImg" width="650" height="300"/>
          <div class="game-item-info">
            <div class="game-item-name">
              {{game.name}}
            </div>
            <div class="game-item-screenshots">
              <img v-for="item in game.photos" :key="item" :src="item" width="145" height="69" style="padding: 3px"/>
            </div>
            <div class="game-item-title">
              <div class="game-item-title-1">现已推出</div>
              <div class="game-item-title-2">热销商品</div>
            </div>
            <div class="game-item-price">{{game.price | format_price}}</div>
          </div>
        </div>
      </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          centeredSlides: true,
          speed: 1000,
          loop: true,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          },
        },
        games : [],
      }
    },
    methods: {
      jumpGame(id) {
        this.$router.push('/gameInfo/' + id);
      }
    },
    mounted() {
      this.$req.get('/game/recommends').then(res => {
        this.games = res.data.data;
      })
    }
  }

</script>

<style scoped lang="scss">
  .home-banner-item {
    display: flex;
    width: 100%;
    position: relative;
    background-position-x: right;
    background-position-y: center;
    box-shadow: 0 0 7px 0px #000;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.6);

    .game-item-info {
      .game-item-name {
        font-size: 18px;
        color: cornflowerblue;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: 200px;
        margin: 5px;
      }

      .game-item-screenshots {
        width: 300px;
      }

      .game-item-title {
        margin-top: 8px;
        padding-left: 6px;
        .game-item-title-1 {
          font-size: 21px;
          font-weight: 400;
          min-height: auto;
          padding-right: 10px;
          padding-top: 6px;
          color: #FFF;
        }
        .game-item-title-2 {
          margin: 10px;
          font-size: 10px;
          padding: 3px;
          width: max-content;
          background-color: gray;
          color: #FFF;
        }
      }

      .game-item-price {
        position: absolute;
        bottom: 10px;
        left: 660px;
        line-height: 15px;
        display: inline-block;
        vertical-align: bottom;
        text-align: right;
        font-size: 14px;
        color: #acdbff;
      }
    }
  }



</style>



