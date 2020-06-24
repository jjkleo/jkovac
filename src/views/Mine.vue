<template>
  <div class="mine">
    <el-container>
      <top-header />
      <el-container class="container">
        <!--主体部分-->
        <div class="container-main">
          <router-view/>
        </div>

        <!--侧边栏-->
        <div class="container-aside">

          <!--选择按钮-->
          <div class="aside-top">
            <el-row justify="center">
              <el-col :span="6" class="aside-top-col">
                <el-button plain circle type="primary" class="aside-top-btn" @click="()=>{ this.$router.push({name:'Personage'}) }">
                  <font-awesome-icon icon="users" />
                </el-button>
                <div class="aside-top-label">人物</div>
              </el-col>
              <el-col :span="6" class="aside-top-col">
                <el-button plain circle type="primary" class="aside-top-btn" @click="()=>{ this.$router.push('/mine/ok') }">
                  <font-awesome-icon icon="film" />
                </el-button>
                <div class="aside-top-label">电影</div>
              </el-col>
              <el-col :span="6" class="aside-top-col">
                <el-button plain circle type="primary" class="aside-top-btn">
                  <font-awesome-icon icon="guitar" />
                </el-button>
                <div class="aside-top-label">音乐</div>
              </el-col>
              <el-col :span="6" class="aside-top-col">
                <el-button plain circle type="primary" class="aside-top-btn">
                  <font-awesome-icon icon="gamepad" />
                </el-button>
                <div class="aside-top-label">游戏</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6" class="aside-top-col">
                <el-button plain circle type="primary" class="aside-top-btn">
                  <font-awesome-icon icon="image" />
                </el-button>
                <div class="aside-top-label">图片</div>
              </el-col>
              <el-col :span="6" class="aside-top-col">
                <el-button plain circle type="primary" class="aside-top-btn">
                  <font-awesome-icon icon="address-book" />
                </el-button>
                <div class="aside-top-label">通讯录</div>
              </el-col>
              <el-col :span="6" class="aside-top-col">
                <el-button plain circle type="primary" class="aside-top-btn">
                  <font-awesome-icon icon="laptop-code" />
                </el-button>
                <div class="aside-top-label">程序人生</div>
              </el-col>
              <el-col :span="6" class="aside-top-col">
                <el-button plain circle type="primary" class="aside-top-btn">
                  <font-awesome-icon icon="ellipsis-h" />
                </el-button>
                <div class="aside-top-label">更多</div>
              </el-col>
            </el-row>
          </div>

          <!--分类-->
          <div class="aside-category">
            待开发
          </div>

        </div>      
      </el-container>
      <!--底部-->
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import TopHeader from "@/components/TopHeader";
export default {
  // name: "Mine",
  components: {
    TopHeader,
  },
  data() {
    return {

    };
  },
  methods:{

  }
};
</script>

<style scoped>
.container {
  text-align: center;
  width: 1000px;
  min-height: 600px;
  margin: auto;
  padding: 10px;
}
.container-main{
  text-align: left;
  padding: 20px 20px;
  width: 700px;
  margin-right: 10px;
  border: 1px solid #dcdfe6;
  background: #ffffff;
}
.container-aside{
  width: 300px;
}
.aside-top{
  width: 300px;
  min-height: 150px;
  border: 1px solid #dcdfe6;
  margin-bottom: 10px;
  background: #ffffff;
}
.aside-top-col{
  text-align:center;
  padding:8px 0px 0px 0px;
}
.aside-top-btn{
  width: 45px;
  height: 45px;
  margin: 0 0 5px 0;
  text-align: center;
  padding: 0;
}
.aside-top-btn svg{
  width: 20px;
  height: 20px;
}
.aside-top-label{
  font-size: 12px;
  line-height: 1;
  text-align: center;
  color: #444;
  white-space: nowrap;
}
.aside-category{
  width: 300px;
  min-height: 400px;
  border: 1px solid #dcdfe6;
  background: #ffffff;
  text-align: left;
}
</style>

<style>
.aside-category-menu .el-submenu__title{
  height: 40px;
  line-height: 40px;
}
.aside-category-menu .el-menu-item{
  height: 40px;
  line-height: 40px;
}
</style>
