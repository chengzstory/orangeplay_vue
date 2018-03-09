<template>
  <swiper :options="swiperOption" >
    <swiper-slide v-for="img in imgs" :key="img.src">
      <div class="banner">
        <div class="banner_img"><img src="/static/1.jpg" width="600" height="350"></div>

        <div class="banner_desc">
          <div class="banner_rating">
            <div class="banner_rating_score" style="display: inline-block;height: 50px;font-size: 40px;vertical-align: bottom" >
              8.5
            </div>
            <div class="banner_rating_icon">
              <ul>
                <li><Rate></Rate></li>
                <li><div class="banner_rating_num">35151评价</div></li>
              </ul>
            </div>
          </div>
          <div><em>五星</em><Progress :percent="99"></Progress></div>
          <div><em>四星</em><Progress :percent="42.7"></Progress></div>
          <div><em>三星</em><Progress :percent="42.7"></Progress></div>
          <div><em>二星</em><Progress :percent="42.7"></Progress></div>
          <div><em>一星</em><Progress :percent="42.7"></Progress></div>

          <div class="banner_game_info">
            <div>发行日期 :<div class="banner_game_date">2017年9月28日</div>
            </div>
            <div style="margin-top: 20px">开发商  :<div class="banner_game_maker">Creative Assembly</div>
            </div>
            <div>发行商 :
              <div class="banner_game_publisher">SEGA</div>
            </div>
            <div style="margin-top: 20px">热门标签 : </div>
            <div>
              <ul>
                <li v-for="tag in tags" :key="tag">
                  <a href="#">
                    <span>{{tag}}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<style scoped>
  .banner_game_info li {
    float: left;

  }
  .banner_game_info a {
    display: block;
    padding: 0 7px;
    color: #67c1f5;
    background-color: rgba(103, 193, 245, 0.3);
    font-size: 12px;
    margin-right: 5px;
  }

  .banner_game_info {
    margin-top: 10px;
  }
  .banner_game_date,.banner_game_maker,.banner_game_publisher{
    position: absolute;
    left: -220px;
    display: inline;
    color: #67c1f5;
  }
  .banner_game_date {
    color: #FFF;
  }

  .banner_desc {
    margin: 10px 0 0 40px;
    padding: 10px;
  }
  .banner {
    display: flex;
    background-position-x: right;
    background-position-y: center;
    box-shadow: 0 0 7px 0px #000;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .banner_rating_icon {
    display: inline-block;
    align-items: center;
    margin-left: 10px;
  }
  .banner_rating_score {
    margin-bottom: 5px;
    color: orange;
  }
  .banner_rating_num {
    font-weight: bold;
    color: #67c1f5;
  }

  .swiper-container {
    z-index: 0;
  }
  .swiper-slide {
    height: 350px;
    width: 940px;
  }

  .ivu-progress {
    width: 170px;
  }
  .ivu-progress-text {
    color: dimgray;
  }

  em {
    color: blanchedalmond;
    margin-right: 10px;
  }
</style>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 'auto',
          centeredSlides: true,
          speed: 1000,
          loop: true,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          },
        },
        imgs : [
          {src:'/static/1.jpg', href: ''},
          {src:'/static/2.jpg', href:''},
          {src:'/static/3.jpg', href:''},
          {src:'/static/4.jpg', href:''},
          // {src:'/static/5.jpg', href:''}
        ],
        tags : ['单机', '冒险', '收集', '有毒', '收费']
      }
    }
  }

</script>
