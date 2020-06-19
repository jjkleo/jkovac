<template>
  <div id="app">
    <h1>{{msg}}</h1>
  </div>
  
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      msg:'Hello,Webpack!!!',
    }
  }
})
</script>

<style scoped>
  h1{
    color: red;
  }
</style>