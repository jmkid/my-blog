<template>
  <div class="home">
    <div class="contain">
      <div class="head">
        <BlogHead></BlogHead>
      </div>

      <div class="container">
        <div class="aside">
          <BlogAside></BlogAside>
        </div>

        <i
            :class=getIcon
            @click="changeAside"
            style="color: black"></i>
        <div class="main">

          <router-view/>
        </div>
      </div>
      <div class="foot">
        当前版本号：V1.0
      </div>
    </div>
  </div>
</template>

<script>
import BlogHead from "@/components/BlogHead";
import BlogAside from "@/components/BlogAside";
import store from "@/store";
import {mapGetters} from "vuex";

export default {
  name: 'home',
  components: {
    BlogHead,
    BlogAside
  },
  data() {
    return {
      iconClass: "",
    }
  },
  methods: {
    changeAside() {
      store.commit("changeAsideState")
    }
  },
  computed: {
    ...mapGetters([
      'getIcon'
    ]),
  }
}
</script>

<style lang="scss">
#home {
  width: 100%;
  height: 100vh;
}

.contain {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.container {
  flex: 1;
  display: flex;
  flex-direction: row;
  // height: 100%;
}

.main {
  padding: 20px;
  flex: 10;
  background-color: #F5F6F7;
}

.head {
  background-color: #2c3e50;
  color: #FFF;
  text-align: center;
}

.aside {
  //flex: 0 2 14vw;
  background-color: #304156;
}

.foot {
  text-align: right;
  padding-right: 20px;
  background-color: #2c3e50;
  color: #FFF;
  font-size: 1px;
}


@mixin aside-icon {
  padding:15px 0 0 5px;
  font-size: 30px;
  z-index:9;
  background-color: #F5F6F7;
  cursor: pointer;
}

.el-icon-s-fold {
  @include aside-icon;
}

.el-icon-s-unfold {
  @include aside-icon;
}
</style>
