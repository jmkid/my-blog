<template>
  <div id="home">
    <div class="container">
      <div class="head">
        <HeadBlog></HeadBlog>
      </div>

      <div class="contain">
        <div class="aside-left">
          <AsideLeft></AsideLeft>
        </div>

        <div class="main">
          <router-view/>
        </div>

        <div class="aside-right">
          <AsideRight></AsideRight>
        </div>
      </div>

      <div class="foot">
        <FootBlog></FootBlog>
      </div>
    </div>
  </div>
</template>

<script>
import HeadBlog from "@/components/HeadBlog";
import AsideLeft from "@/components/AsideLeft";
import Article from "@/views/Article";
import AsideRight from "@/components/AsideRight";
import FootBlog from "@/components/FootBlog";

export default {
  name: 'home',
  components: {
    HeadBlog,
    AsideLeft,
    // eslint-disable-next-line vue/no-unused-components
    Article,
    AsideRight,
    FootBlog,
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
#home {

}

.container {
  display: flex;
  flex-direction: column;
}

.head {
  z-index: 99999;
  //background-color: deepskyblue;

  //background: url("https://czjdream.com:8089/myImg/headBlog.jpg") no-repeat;
  background: url("http://localhost:8082/myImg/headBlog.jpg") no-repeat;
  background-size: 100% 100%;
  //opacity: 0.9;
  height: 60vh;
  //min-height: 300px;
  @media(max-width: 700px) {
    height: 20vh
  }
  @media(max-width: 320px) {
    height: 20vh;
  }
}

.contain {
  flex: 1;
  display: flex;
  flex-direction: row;
  height: auto;
}

.aside-left {
  margin: 5px 0 5px 4vw;
  padding: 5px;
  box-shadow: 0 10px 10px #c8c7c7;
  background-color: #FFF;
  flex: 0 1 200px;
  @media(max-width: 900px) {
    display: none;
  }
  @media(max-width: 320px) {
    display: none;
  }
}

.main {
  padding: 30px;
  margin: 2vw;
  flex: 4;
  box-shadow: 0 0 20px #c8c7c7;

}

.aside-right {
  margin: 5px 4vw 5px 5px;
  z-index: 99999;
  padding: 5px;
  box-shadow: 0 10px 10px #c8c7c7;
  flex: 0 1 260px;
  background-color: #FFF;
  @media(max-width: 900px) {
    display: none;
  }
}

.foot {
  flex: 1;
  background-color: #5252d9;
  text-align: center;
  z-index: 99999;
}

a {
  color: black;
  text-decoration: none;
}
</style>
