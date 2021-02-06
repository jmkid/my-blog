<template>
  <div id="BlogAside">
    <!--    <i-->
    <!--        :class="iconClass"-->
    <!--        @click="changeAsideState"-->
    <!--        style="color: black"></i>-->
    <el-menu class="el-menu-vertical-demo"
             :collapse="getState">

      <!--      <el-menu-item index=item.index @click="changeAsideState"-->
      <!--                    style="text-align: center;font-size: 15px">-->
      <!--        <i  :class="iconClass" style="color: white"></i>-->
      <!--        <span slot="title">收起侧栏</span>-->
      <!--      </el-menu-item>-->
      <div v-for="item in routes">
        <el-menu-item index=item.index @click="$router.push({path:item.url})"
                      style="text-align: center;font-size: 15px">
          <i :class=item.icon style="color: white"></i>
          <span slot="title">{{ item.rou }}</span>
        </el-menu-item>
      </div>

    </el-menu>
  </div>
</template>

<script>
import store from '@/store'
import {mapGetters} from "vuex";


export default {
  name: "BlogAside",
  data() {
    return {
      isCollapse: "",
      routes: [
        {index: "1", icon: "el-icon-document", rou: "文章列表", url: "/home/articleList"},
        {index: "2", icon: "el-icon-edit", rou: "文章编辑", url: "/home/articleEdit"},
        {index: "3", icon: "el-icon-view", rou: "更新内容", url: "/home/reNew"},
        {index: "4", icon: "el-icon-paperclip", rou: "友链内容", url: "/home/friendLink"},
        {index: "5", icon: "el-icon-chat-dot-round", rou: "留言内容", url: "/home/messagePage"},
        {index: "6", icon: "el-icon-reading", rou: "书享列表", url: "/home/bookShare"},
        {index: "7", icon: "el-icon-film", rou: "影视列表", url: "/home/videoShare"},
        {index: "8", icon: "el-icon-coordinate", rou: "游戏列表", url: "/home/gameList"},
        {index: "9", icon: "el-icon-football", rou: "动漫列表", url: "/home/fanList"}
      ]
    }
  },
  computed: {
    ...mapGetters([
      'getState'
    ]),
  },
}
</script>


<style scoped lang="scss">
#BlogAside {
  height: 100%;
}

.aside-item {
  padding-top: 20px;
  text-align: center;
}

.router-link {
  z-index: 9999;
  text-decoration: none;
}

.router-item {
  margin: 1vh 0 1vh 0;
  display: block;
  width: 100%;
  line-height: 40px;
}

.router-item:hover {
  background-color: #3a4a5d;
  cursor: pointer;
}

.router-item:active {
  background-color: #3a4a5d;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  background-color: #304156;
  color: white;
}

//收缩的侧边栏
.el-menu {
  background-color: #304156;
  border: none;
  position: relative;
}

.el-menu-item:hover, .el-menu-item:focus {
  background-color: #3a4a5d;
}

.el-menu-item * {
  color: white;
}

.el-menu-item {

}
</style>
