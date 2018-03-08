<template>
  <swiper :options="swiperOption" >
    <swiper-slide v-for="img in imgs" :key="img.src">
      <a href="#">
        <div class="data">
          <div ><img :src="img.src" width="600" height="350"/></div>
          <div class="info">
            <div class="app_name">
              Slipe the Sky
            </div>
            <div class="screenshots">
              <img v-for="item in imgs" :src="item.src" width="162" height="69" style="padding: 3px"/>
            </div>
            <div class="reason">
              <div class="main">现已推出</div>
              <div class="additional">热销商品</div>
            </div>
            <div class="price"> $329</div>
          </div>
        </div>
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>



</template>

<style scoped>
  .swiper-container {
    z-index: 0;
  }
  .swiper-slide {
    height: 350px;
    width: 940px;
  }
  a {
    display: block;
  }
  .data {
    display: flex;
    position: relative;
    background-position-x: right;
    background-position-y: center;
    box-shadow: 0 0 7px 0px #000;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .app_name {
    align-items: center;
    padding-top: 10px;
    font-weight: 500;
    font-size: 25px;
    height: 80px;
    padding-left: 6px;
    padding-right: 6px;
    display: flex;
    color: #FFF;
    vertical-align: middle;
  }
  .screenshots {
    width: 344px;
    marign-left: -30px;
    max-height: 176px;
    position: relative;
  }
  .reason {
    margin-top: 8px;
    padding-left: 6px;
    width: 298px;
  }
  .price {
    position: absolute;
    bottom: 10px;
    left: 610px;
    line-height: 15px;
    display: inline-block;
    vertical-align: bottom;
    text-align: right;
    font-size: 14px;
    color: #acdbff;
  }
  .main {
    font-size: 21px;
    font-weight: 400;
    min-height: auto;
    padding-right: 10px;
    padding-top: 6px;
    color: #FFF;
  }
  .additional {
    margin: 8px;
    font-size: 10px;
    padding: 3px;
    width: max-content;
    background-color: gray;
    color: #FFF;
  }
</style>

<script>
  export default {
    // props : {
    //   imgs : Array
    // },
    data() {
      return {
        swiperOption: {
          slidesPerView: 'auto',
          centeredSlides: true,
          speed: 1000,
          autoplay: {
            delay: 1500,
            disableOnInteraction: false
          },
          loop: true,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          },
          effect: 'coverflow',
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
          },
        },
        imgs : [
          {src:'/static/1.jpg', href: ''},
          {src:'/static/2.jpg', href:''},
          {src:'/static/3.jpg', href:''},
          {src:'/static/4.jpg', href:''},
          // {src:'/static/5.jpg', href:''}
        ]
      }
    }
  }
</script>
