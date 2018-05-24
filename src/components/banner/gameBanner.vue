<template>
  <div>
    <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
      <swiper-slide v-for="(item,index) in photos" :key="index">
        <img :src="item" width="620" height="400">
      </swiper-slide>
    </swiper>
    <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
      <swiper-slide v-for="(item,index) in photos" :key="index">
        <img :src="item" width="150" height="80">
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
  .gallery-top {
    height: 400px;
    width: 100%;
  }
  .swiper-slide {
    background-size: cover;
    background-position: center;
  }
  .gallery-thumbs {
    height: 90px;
    box-sizing: border-box;
    padding: 5px;
    img:hover {
      border: 2px beige solid;
    }
  }
  .gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  .gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }

</style>
<script>
  export default {
    props: {
      photos : Array
    },
    data() {
      return {
        swiperOptionTop: {
          loop: true,
          loopedSlides: 6, //looped slides should be the same
        },
        swiperOptionThumbs: {
          slidesPerView: 4,
          touchRatio: 0.2,
          loop: true,
          loopedSlides: 6, //looped slides should be the same
          slideToClickedSlide: true,
        },
      }
    },
    mounted() {
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.swiper
        const swiperThumbs = this.$refs.swiperThumbs.swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      });
    }
  }

</script>


