<template>
  <div class="home">
    <img alt="Vue logo" :src="img" />
    <img src="/static/image/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import img from '@/assets/image/logo.png';

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data () {
    return {
      img
    }
  },
  mounted:function(){
    console.log(img);
  }
};
</script>
