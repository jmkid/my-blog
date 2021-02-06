<template>
  <div id="aside-left">
    <div class="aside-item">
      <router-link to="/">主页</router-link>
      <br><br>
      <router-link to="/homePage/TimeLine">更新</router-link>
      <br><br>
      <router-link to="/homePage/friendLink">友链</router-link>
      <br><br>
      <router-link to="/homePage/fileLine">归档</router-link>
      <br><br>
      <router-link to="/homePage/remarkPage">留言</router-link>
      <br><br>
      <router-link to="/homePage/">书享</router-link>
      <br><br>
      <router-link to="/homePage/">影视</router-link>
      <br><br>
      <router-link to="/homePage/">游戏</router-link>
      <br><br>
      <router-link to="/homePage/">动漫</router-link>
      <br><br>
    </div>
  </div>
</template>

<script>
export default {
  name: "AsideLeft"
}
</script>

<style lang="scss" scoped>
#aside-left {
  position: sticky;
  top: 10vh;
  margin: 0 10px 0 10px;
}

.aside-item {
  text-align: center;
  margin-top: 100px;
  padding: 20px;
  box-shadow: 0 0 10px #c8c7c7;
}

a {
  text-decoration: none;
  color: #5252d9;
}

router-link {
  z-index: 9999;
  text-decoration: none;
}
</style>
