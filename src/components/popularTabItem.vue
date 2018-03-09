<template>
  <div>
    <a href="#" class="tab_item" v-for="game in games" :key="game.name">
      <div class="tab_item_cap">
        <img :src="game.img" class="tab_item_cap_img" width="80" height="80">
      </div>

      <div class="tab_item_discount">
        <span>{{game.price}}</span>
      </div>

      <div class="tab_item_content">
        <div class="tab_item_name"><span>{{game.name}}</span></div>
        <div class="tab_item_top_tags">
          <span v-for="tag in game.tags">{{tag}} </span>
        </div>
      </div>
    </a>
  </div>
</template>


<style scoped>
  .tab_item {
    position: relative;
    display: block;
    background: rgba( 0, 0, 0, 0.2 );
    height: 69px;
    margin-bottom: 5px;
  }
  .tab_item:hover {
    background-color: rgba(252, 132, 10, 0.3);
    margin-right: -14px;
    padding-right: 14px;
  }
  .tab_item_content {
    padding-top: 7px;
    white-space: nowrap;
    overflow: hidden;
    font-size: 12px;
  }
  .tab_item_top_tags {
    margin-top: 20px;
    height: 20px;
    white-space: normal;
    overflow: hidden;
  }

  ul {
    display: inline-flex;
  }
  .tab_item_cap {
    line-height: 69px;
    left: 0;
    top: 0;
    z-index: 3;
    max-width: 33%;
    margin-right: 3%;
    float: left;
  }
  .tab_item {
    margin-top: 24px;
    width: auto;
  }
  .tab_item_discount {
    display: block;
    float: right;
    color: #acdbf5;
    margin-right: 16px;
    background: none;
    font-style: italic;
    text-align: right;
    margin-top: 20px;
  }
  .tab_item_name {
    color: #c7d5e0;
    font-size: 1.25em;
    line-height: 18px;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    overflow: hidden;
    transition: color 0.25s;
  }
  .tab_item_cap_img {
    width: 124px;
    height: 46px;
    vertical-align: middle;
  }
</style>

<script>
  export default {
    data() {
      return {
        games: [
          {name: 'Pit People', img: '/static/1.jpg', price: '88元', tags: ['动作', '冒险', '益智', '策略']},
          {name: 'Dota2', img: '/static/2.jpg', price: '88元', tags: ['动作', '冒险', '益智', '策略']},
          {name: 'LoL', img: '/static/3.jpg', price: '88元', tags: ['动作', '冒险', '益智', '策略']},
          {name: 'MHXY', img: '/static/4.jpg', price: '88元', tags: ['动作', '冒险', '益智', '策略']},
        ],
      }
    }
  }
</script>
