<template>
  <div class="download">
    <el-container>
      <top-header />
      <el-main>
        <div class="container">
          Download
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
  background: blue;
  text-align: center;
  width: 1000px;
  min-height: 600px;
  margin: auto;
}
</style>
