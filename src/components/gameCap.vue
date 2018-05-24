<template>
  <div>
    <div v-for="game in games" class="game_item_cap" @click="jump(game.gameId)">
      <div class="tab_item_cap">
        <img :src="game.mainImg" class="tab_item_cap_img" width="180" height="80">
      </div>

      <div class="tab_item_price">
        <span>{{game.price | format_price}}</span>
        <a class="remove-link" v-if="isCart === true" @click="removeLink(game.gameId)">移除</a>
      </div>

      <div class="tab_item_content">
        <div class="tab_item_name"><span>{{game.name}}</span></div>
        <div class="tab_item_bottom_tags">
          <span v-for="tag in game.tags">{{tag}} </span>
        </div>


        <el-popover
          placement="top"
          width="300"
          trigger="hover"
          :content="content(game.review)">
          <div class="tab_item_bottom_review" slot="reference" v-if="game.tags === null"
               v-bind:class="{
                   'good-bg': chooseBg(game.review) === 1,
                   'bad-bg': chooseBg(game.review) === -1,
                   'medium-bg': chooseBg(game.review) === 0}"></div>
        </el-popover>
      </div>

      <div class="tab_item_date" style="margin: auto 0">
        <span>{{game.date}}</span>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  .game_item_cap {
    display: flex;
    position: relative;
    box-shadow: 0 0 7px 0px #000;
    background-color: rgba(0, 0, 0, 0.6);
    margin: 5px auto;
    padding: 3px;
    .tab_item_price {
      position: absolute;
      right: 10px;
      top: 35px;
      font-size: 15px;
      color: whitesmoke;
      .remove-link {
        display: block;
        color: #56707f;
        text-decoration: underline;
        font-size:13px;
        text-align: right
      }
    }
    .tab_item_date {
      font-size: 14px;
      margin: auto 0;
      color:  #4c6c8c;
    }
    .tab_item_content {
      margin-left: 10px;
      .tab_item_name {
        color: cornflowerblue;
        font-size: 1.25em;
        line-height: 18px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: 250px;
        transition: color 0.25s;
      }
      .tab_item_bottom_tags {
        position: absolute;
        bottom: 3px;
        color: #666666;
      }
      .tab_item_bottom_review {
        display: inline-block;
        height: 32px;
        width: 32px;
        position: absolute;
        bottom: 8px;
      }
      .good-bg {
        background-image: url(/static/good.png);
      }
      .bad-bg {
        background-image: url(/static/bad.png);
      }
      .medium-bg {
        background-image: url(/static/medium.png);
      }

    }
  }
  .game_item_cap:hover {
    background-color: rgba(0, 13, 10, 0.3);
  }
</style>


<script>
  export default {
    props: {
      games: Array,
      isCart: Boolean
    },
    methods: {
      jump(gameId) {
        this.$router.push('/gameInfo/' + gameId);
      },
      chooseBg(review) {
        if (review > 3.5) {
          return 1;
        } else if (review > 2.5) {
          return 0;
        } else {
          return -1;
        }
      },
      content(review) {
        if (review > 3.5) {
          return "好评如潮, " + review + "评分";
        } else if (review > 2.5) {
          return "褒贬不一, " + review + "评分";
        } else {
          return "差评, " + review + "评分";
        }
      },
      removeLink(gameId) {
        event.stopPropagation();
        this.$emit('removeLink', gameId);
      }
    }
  }
</script>
