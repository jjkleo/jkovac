<template>
  <div>
    <input :value="ok" @input="updateValue">
  </div>
</template>


<script>
export default {
  props: ['ok'],
  data () {
    return {
    }
  },
  methods: {
    updateValue: function(event){
      this.$emit('input', event.target.value);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
