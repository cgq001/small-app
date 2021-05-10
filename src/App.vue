<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">主应用</router-link> |
      <router-link to="/vue">Vue子应用</router-link>
      <router-link to="/React">React子应用</router-link>
    </div>
    <router-view/>
    <div id="vue"></div>
    <div id="react"></div> -->
    <el-container class="appBox">
      <el-header>
          <el-menu 
            default-active="/" 
            class="el-menu-demo" 
            mode="horizontal"
            :router='true'>
            <el-menu-item index="/">主应用</el-menu-item>
            <el-menu-item index="/vue">Vue子应用</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
          <router-view />
          <div id="vue"></div>
          <div id="react"></div>
      </el-main>
    </el-container>
    
  </div>
</template>

<script>
export default {
  computed:{
    router:function(){
      return this.$router.options.routes
    }
  },
  watch:{
    router:{
      handler(news,olds){
        console.log(news)
      },
      immediate: true
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
.appBox{
  width: 100%;
  height: 100%;
}
</style>
