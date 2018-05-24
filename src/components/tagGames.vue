<template>
  <div class="tag-games">
    <div class="tag-game-title">
      正在浏览{{tag}}类型的游戏
    </div>

    <tag-banner :tag="this.$route.params.tag"></tag-banner>
    <game-cap class="game-cap-style" :games="games"></game-cap>


    <div class="tag-game-page">
      <Page :total="total" show-total size="small" :current="current" :page-size="size" @on-change="pageChange"></Page>
    </div>

  </div>
</template>


<script>
  import gameCap from '@/components/gameCap'
  import tagBanner from '@/components/banner/tagBanner'
  export default {
    components: {
      gameCap, tagBanner
    },
    data() {
      return {
        games: [],
        tag: '',
        total: 0,
        current: 1,
        size: 10
      }
    },
    methods: {
      pageChange(index) {
        this.current = index;
        this.$req.get('/game/tag/' + this.tag, {current: this.current, size: this.size}).then(res => {
          this.games = res.data.data.games;
          this.total = res.data.data.total;
        })
      }
    },
    mounted() {
      this.tag = this.$route.params.tag;
      this.$req.get('/game/tag/' + this.tag, {current: this.current, size: this.size}).then(res => {
        this.games = res.data.data.games;
        this.total = res.data.data.total;
      })
    }
  }
</script>

<style lang="scss" >
  .tag-games {
    width: 940px;
    margin: 0 auto;
    .tag-game-title {
      color: whitesmoke;
      font-size: 22px;
      margin-top: 30px;
      margin-bottom: 20px;
    }
    .game-cap-style {
      margin-top: 80px;

    }
    .tag-game-page {
      float: right;
    }
  }
</style>
