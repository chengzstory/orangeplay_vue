<template>
  <div style="width: 33%">
    <ul>
      <li>
        <router-link :to="{path : '/nav/popularGames', params : {games : popularGames}}">
          <Button >热销与热门商品</Button>
        </router-link>
      </li>
      <li>
        <router-link :to="{path : '/nav/toOnlineGames', params : {games : toOnlineGames}}">
          <Button onclick="">即将推出</Button>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<style scoped>

</style>
<script>
  export default {
    data() {
      return {
        popularGames : [
          {name : 'Pit People', img : '/static/1.jpg', price : '88元', tags : ['动作', '冒险', '益智', '策略']},
          {name : 'Dota2', img : '/static/2.jpg', price : '88元', tags : ['动作', '冒险', '益智', '策略']},
          {name : 'LoL', img : '/static/3.jpg', price : '88元', tags : ['动作', '冒险', '益智', '策略']},
          {name : 'MHXY', img : '/static/4.jpg', price : '88元', tags : ['动作', '冒险', '益智', '策略']},
        ],
        toOnlineGames : [
          {name : 'Dota2', img : '/static/2.jpg', price : '88元', tags : ['动作', '冒险', '益智', '策略']},
          {name : 'Pit People', img : '/static/1.jpg', price : '88元', tags : ['动作', '冒险', '益智', '策略']},
          {name : 'MHXY', img : '/static/4.jpg', price : '88元', tags : ['动作', '冒险', '益智', '策略']},
          // {name : 'LoL', img : '/static/3.jpg', price : '88元', tags : ['动作', '冒险', '益智', '策略']},
        ]

      }
    }
  }
</script>
