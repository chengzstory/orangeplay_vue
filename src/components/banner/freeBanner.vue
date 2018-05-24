<template>
  <swiper :options="swiperOption" class="free-banner" v-if="show">
    <swiper-slide v-for="(game,index) in games" :key="index">
      <div class="free-banner-item" @click="jumpGame(game.gameId)">
        <img :src="game.mainImg" height="300" width="300"/>
        <div class="app-name">
          {{game.name}}
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
  import req from '../../api/axios'
  export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 20,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
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
      req.get('/game/frees').then(res => {
        this.games = res.data.data;
        this.show = true;
      })
    }
  }

</script>

<style scoped lang="scss">
  .free-banner {
    width: 100%;

    .free-banner-item {
       box-shadow: 0 0 7px 0px #000;
       background-color: rgba(0, 0, 0, 0.6);

     }
    .app-name {
      text-align: center;
      font-size: 20px;
      font-weight: normal;
      color: cornflowerblue;

      line-height: 20px;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      padding: 5px;
    }
  }
</style>
