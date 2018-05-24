<template>
  <div class="dd">
    <div ref="box" id="box">
      <p>
        通过 input 的复选框以及 ~ 选择符的方式来控制元素内容的显示，从而展示更多的内容部分。
      </p>
    </div>


    <div class="game_page_fade">
      <div class="game_page_readmore">展开阅读</div>
    </div>

  </div>
</template>


<style lang="scss" scoped>
  body {
    background-color: #183F59;
  }
  #box {
    height: 20px;
    overflow: hidden;
    width: 10em;
    margin-bottom: .5em;
    line-height: 1em;
    border: 1px solid #000;
  }


</style>

<script>
  export default {
    methods : {
      click() {
        console.log(this.$refs.box.offsetHeight)
        this.$refs.box.style.height = 'auto';
        this.text = '隐藏';
      },
      show() {
        // return this.$refs.box > 40;
        return false;
      }
    },
    data() {
      return {
        text: '显示全部',
        a: null
      }
    },
    mounted() {
      this.a = this.$refs.box.offsetHeight === 20;
    }
  }
</script>
