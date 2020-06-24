<template>
  <div class="header-container">
    <div class="top-header">
      <el-row :gutter="10">
        <el-col :span="4" class="top-header-logo">
          <router-link to="/" replace>
            <img :src="logo" width="150px">
          </router-link>
        </el-col>
        <!--导航栏-->
        <el-col :span="8">
          <el-menu router :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/explore">发现</el-menu-item>
            <el-menu-item index="/mine">我的</el-menu-item>
            <el-menu-item index="/download">下载客户端</el-menu-item>
          </el-menu>
        </el-col>
        <!--搜索框-->
        <el-col :span="6" class="top-header-item">
          <el-input
            placeholder="请输入内容"
            v-model="search"
            clearable
            size="medium">
          </el-input>

        </el-col>
        <el-col :span="2" class="top-header-item">
          <el-button type="primary" size="medium" @click="doSearch()">
            搜索
          </el-button>
        </el-col>
        <el-col :span="3" class="top-header-item">
          <span class="header-svg" v-html="svgBell"/><span class="header-svg" v-html="svgComments"/>
        </el-col>
        <el-col :span="1" class="top-header-item">
          <el-avatar shape="square" size="medium" :src="avatar" style="margin:auto">
          </el-avatar>
        </el-col>
      </el-row>
      
      
    </div>
  </div>
</template>

<script>
import logo from '@/assets/image/logo.png';
import svgBell from '@/assets/icon/bell.svg';
import svgComments from "@/assets/icon/comments.svg";
import avatar from "@/assets/image/avatar-default.png";

export default {
  name:"TopHeader",
  data() {
    return {
      activeIndex: this.$route.path, 
      search:'',
      logo,
      avatar,
      svgBell,
      svgComments,
    };
  },
  methods: {
    doSearch(){
      console.log('doSearch()');
    },
  }

}
</script>

<style scoped>

.header-container{
  border-bottom:solid 1px #e6e6e6;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  background: #ffffff;
}

.top-header{
  width: 1200px;
  margin: auto;
}
.el-menu.el-menu--horizontal{
  border-bottom: 0;
}
.top-header-logo{
  padding-top:5px;
  /* text-align: center; */
  /* background: olive; */
}

.top-header-item{
  padding-top:10px;
  text-align: center;
}

.search-input{
  height: 30px;
  margin: auto;
}
.header-svg{
  display: inline-flex;
  align-items: center;
  color:#8590a6;
  padding-top: 10px;
  margin: 0 0 0 30px;
}
</style>