<template>
  <swiper :options="swiperOption" class="tag-banner" >
    <swiper-slide v-for="(game,index) in games" :key="index" >
      <div @click="jumpGame(game.gameId)" class="tag-game-item">
          <img :src="game.mainImg" width="460" height="260" style="float: left"/>
          <div class="screenshots" style="">
            <img v-for="item in game.photos" :key="item" :src="item" width="240" height="130"/>
          </div>

        <div class="tag-game-info">
          <div class="tag-game-name">
            {{game.name}}
          </div>
          <div class="tag-game-price">
            {{game.price | format_price}}
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
  export default {
    props: ['tag'],
    data() {
      return {
        swiperOption: {
          centeredSlides: true,
          speed: 1000,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          },
        },
        games : [],
        show : false
      }
    },
    methods: {
      jumpGame(id) {
        this.$router.push('/gameInfo/' + id);
      }
    },
    mounted() {
      this.$req.get('/game/recommends/' + this.tag).then(res => {
        this.games = res.data.data;
        this.show = true;
      })
    }
  }

</script>

<style lang="scss" scoped>
  .tag-game-item {
    width: 100%;
    box-shadow: 0 0 7px 0px #000;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.6);
    .screenshots {
      display: contents;
      float: right;
    }
    .tag-game-info {
      padding: 5px;
      height: 60px;
      .tag-game-name {
        color: cornflowerblue;
        float: left;
        margin-left: 10px;
        font-size: 18px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: 300px;
      }
      .tag-game-price {
        float: right;
        font-size: 14px;
        color: whitesmoke;
      }
    }

  }




</style>
