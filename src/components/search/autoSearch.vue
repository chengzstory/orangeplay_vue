<template>
  <div>
    <AutoComplete
      v-model="key"
      @on-search="fullSearch"
      placeholder="搜索商店">
      <Option v-for="game in games" :value="game.name" :key="game.name">
        <div class="auto-complete-search-item" @click="$router.push('/gameInfo/' + game.gameId);">
          <img :src="game.mainImg" width="120" height="70"/>
          <div class="search-item-right-label" >
            <label class="search-item-game-name">{{game.name}}</label>
            <label class="search-item-game-price">{{game.price | format_price}}</label>
          </div>
        </div>
      </Option>
    </AutoComplete>
  </div>
</template>

<style lang="scss" scoped>
  .auto-complete-search-item {
    display: flex;
    border: 1px solid gainsboro;
    .search-item-right-label {
      position: relative;
      margin: 5px;
      color: black;
      .search-item-game-name {
        width: 140px;
        font-size: 15px;
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .search-item-game-price {
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
  .hr-top, .hr-bottom {
    display: block;
    background-color: black;
    height: 1px;
  }


  .auto-complete-search-item:hover {
    box-shadow: 0 0 7px 0px #000;
    background-color: rgba(0, 0, 0, 0.6);
  }

</style>

<script>
  export default {
    props: ['keyword'],
    data() {
      return {
        games: [],
        key: this.keyword
      }
    },
    methods: {
      fullSearch() {
        this.$req.get('/game/header/search', {keyword: this.key.toLowerCase()}).then( res => {
          this.games = res.data.data;
        })
      },
      jump() {
        var keyword = this.key === '' ? 'all' : this.key;
        this.$router.push('/search/' + keyword);
      }
    },
  }
</script>
