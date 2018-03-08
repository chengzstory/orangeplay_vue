<template>
  <div id="app">
    <top></top>
    <router-view/>
    <bottom></bottom>
  </div>
</template>

<script>
  import top from '@/components/top'
  import bottom from '@/components/bottom'
  export default {
    name: 'App',
    components: {
      top, bottom
    }
}
</script>

<style>
#app {
}
body {
  background-color: #183F59;
  font-family: "Motiva Sans", Sans-serif;
}
</style>
