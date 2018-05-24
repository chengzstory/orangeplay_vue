<template>
  <div class="cart-body">
    <div class="cart-title">
      您的购物车
    </div>

    <game-cap :games="games" :isCart="true" v-if="show" @removeLink="removeCartItem"></game-cap>
    <div v-else class="cart-no-game">
      暂无任何商品。
    </div>

    <div class="cart-buy-area">
      <div class="total-price">
        合计 {{total}}元
      </div>
      <el-button type="primary" size="small" class="buy-btn" @click="placeOrder" :disabled="!show">下单购买</el-button>
    </div>
  </div>
</template>

<script>
  import gameCap from '@/components/gameCap'
  export default {
    components: {gameCap},
    data() {
      return {
        games: [],
        total: 0,
        show: false
      }
    },
    mounted() {
      this.$req.get('/user/carts').then(res => {
        this.games = res.data.data;
        for (var i = 0; i < this.games.length; i++) {
          this.total += this.games[i].price;
          this.show = true;
        }
      })
    },
    methods: {
      placeOrder() {
        this.$req.post('/user/placeOrder', this.games).then(res => {
          this.$message({type: 'success', message: '购买成功', duration: 1500});
          this.games = [];
        });
      },
      removeCartItem(gameId) {
        this.$req.get('/user/cart/remove/' + gameId).then(() => {
          this.$message({type: 'success', message: '删除成功', duration: 1500});
          for (var i = 0; i < this.games.length; i++) {
            if (this.games[i].gameId === gameId) {
              this.games.splice(i, 1);
              break;
            }
          }
          if (this.games.length === 0) {
            this.show = false;
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cart-body {
    margin: 50px auto;
    width: 600px;
    min-height: 500px;
    overflow: hidden;
    .cart-title {
      font-size: 24px;
      color: whitesmoke;
    }
    .cart-buy-area {
      background-color: rgba(0, 0, 0, 0.2);
      padding: 20px;
      margin-top: 5px;
      font-size: 14px;
      color: #c7d5e0;
      font-weight: bold;
      .total-price {
        margin: auto 0;
        display: inline-block;
      }
      .buy-btn {
        display: inline-block;
        float: right;
      }
    }
    .cart-no-game {
      font-size: 18px;
      color: gray;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }

</style>
