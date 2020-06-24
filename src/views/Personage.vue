<template>
  <div>
    <div class="main-top">
      <span class="main-top-label">人物</span>
      <div class="main-top-category">
        <el-link>全部</el-link>
        <span class="separator-line">|</span>
        <el-link>网红</el-link>
        <span class="separator-line">|</span>
        <el-link>歌手</el-link>
        <span class="separator-line">|</span>
        <el-link>演员</el-link>
        <span class="separator-line">|</span>
        <el-link>作家</el-link>
        <span class="separator-line">|</span>
        <el-link>科学家</el-link>
        <span class="separator-line">|</span>
        <el-link>政要</el-link>
      </div>
    </div>
    <div class="main-show">
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <div v-for="item in data" :key="item.index">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Personage",
  data() {
    return {
      count: 0,
      data: [],
      busy: false
    };
  },
  methods: {
    loadMore: function() {
      this.busy = true
      setTimeout(() => {
        for (var i = 0, j = 10; i < j; i++) {
          this.data.push({name: this.count++ })
        }
        console.log(this.data)
        this.busy = false
      }, 1000)
    }
  },
};
</script>

<style scoped>
.main-top {
  height: 40px;
  border-bottom: 2px solid rgb(0, 132, 255);
}

.main-top-label {
  font-size: 24px;
  font-weight: normal;
  font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
}
.main-top-category {
  display: inline-block;
  font-size: 10px;
  font-family: Arial, Helvetica, sans-serif;
  color: #666;
}
.main-top-category > :first-child {
  margin-left: 15px;
}
.separator-line {
  margin: 0 10px;
  color: #ccc;
}
</style>
