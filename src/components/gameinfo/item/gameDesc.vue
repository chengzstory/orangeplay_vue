<template>
  <div style="position: relative; padding-bottom: 20px">
    <div class="game_area_desc" v-html="content" ref="desc">
      {{content}}
    </div>
    <div class="game_page_fade" v-if="visible">
      <div class="game_page_readmore" @click="readMore">展开阅读</div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  .game_area_desc {
    overflow: hidden;
    width: 600px;
    height: 350px;
  }

  .game_page_fade {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 73px;
    z-index: 1;
  }

  .game_page_readmore {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 20px;
    line-height: 20px;
    cursor: pointer;
    color: #67c1f5;
    font-size: 10px;
    padding-right: 12px;
  }
  .game_page_readmore:hover {
    color: aliceblue;
  }
</style>

<script>
  export default {
    props : {
      content : String
    },
    data() {
      return {
        visible : true,
      }
    },
    methods : {
      readMore() {
        this.visible = false;
        this.$refs.desc.style.height = 'auto';
      }
    }
  }
</script>
