<template>
  <div class="home">
    <el-container>
      <top-header />
      <el-main>
        <div class="container">
          主页内容
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import TopHeader from "@/components/TopHeader";
export default {
  name: "Home",
  components: {
    TopHeader,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.container {
  background: coral;
  text-align: center;
  width: 1000px;
  min-height: 600px;
  margin: auto;
}
</style>
