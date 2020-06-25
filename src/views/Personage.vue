<template>
  <div>
    <div class="main-top">
      <span class="main-top-label">人物</span>
      <div class="main-top-category">
        <el-link class="main-top-link">全部</el-link>
        <span class="separator-line">|</span>
        <el-link class="main-top-link">网红</el-link>
        <span class="separator-line">|</span>
        <el-link class="main-top-link">歌手</el-link>
        <span class="separator-line">|</span>
        <el-link class="main-top-link">演员</el-link>
        <span class="separator-line">|</span>
        <el-link class="main-top-link">作家</el-link>
        <span class="separator-line">|</span>
        <el-link class="main-top-link">科学家</el-link>
        <span class="separator-line">|</span>
        <el-link class="main-top-link">政要</el-link>
      </div>
    </div>
    <div>

      <div class="main-show">
        <el-row>
          <el-col class="show-card" :style="{ paddingLeft: index%4==0?'0px':'5px'}" :span="6" v-for=" (img, index) in images" :key="index">
            <el-card :body-style="{ padding: '10px',textAlign:'center'}">
              <el-image
                style="width: 130px; height: 150px"
                :src="img.url"
                fit="cover">
              </el-image>
              <div>
                <span class="card-name">{{img.id}}</span>
                <span class="card-name">{{img.name}}</span>
                <div class="show-bottom">
                  <el-button type="text">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div>
        <!--分页-->
        <el-pagination
          background
          small
          layout="total,->,prev,pager,next,jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :pager-count="5"
          :page-size.sync="pageSize"
          :page-sizes="[8, 12, 24, 36]"
          :total="total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Personage",
  data() {
    return {
      currentPage: 1,
      images: [],
      total: 0,
      pageSize: 12,
    };
  },
  methods: {
    doUpdate(){
      this.$store.commit({
        type:'getImages',
        currentPage: this.currentPage,
        pageSize:this.pageSize,
      });
      this.images=this.$store.state.filteredImages;
      this.total=this.$store.getters.total;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.doUpdate();
      this.currentPage=1;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.doUpdate();
    }
  },
  mounted () {
    this.doUpdate();
  }
};
</script>

<style scoped>
.main-top {
  height: 40px;
  border-bottom: 2px solid rgb(0, 132, 255);
}

.main-top-label {
  font-size: 20px;
  font-weight: normal;
  font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
  margin-right: 25px;
}
.main-top-category {
  display: inline-block;
}
.main-top-category > :first-child {
  margin-left: 15px;
}
.main-top-link{
  font-size: 12px;
  color: #666;
  font-family: Arial, Helvetica, sans-serif;
}
.separator-line {
  margin: 0 10px;
  font-size: 12px;
  color: #ccc;
}
.main-show{
  padding-top: 5px;
}
.show-card{
  padding: 5px 0px 5px 0px;
}
.card-name{
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
