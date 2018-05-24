<template>
  <div v-if="show">
    <game-cap :games="games"></game-cap>
  </div>
</template>

<script>
  import gameCap from '@/components/gameCap'
  export default {
    components: {gameCap},
    data() {
      return {
        games : [],
        show : false
      }
    },
    mounted() {
      this.$req.get('/game/qualities').then(res => {
        this.games = res.data.data;
        this.show = true;
      })
    }
  }
</script>
