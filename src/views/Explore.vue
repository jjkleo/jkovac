<template>
  <div class="explore">
    <el-container>
      <top-header />
      <el-main>
        <div class="container">
          Explore
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import TopHeader from "@/components/TopHeader";
export default {
  name: "Explore",
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
  background: green;
  text-align: center;
  width: 1000px;
  min-height: 600px;
  margin: auto;
}
</style>
