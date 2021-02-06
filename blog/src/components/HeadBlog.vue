<template>
  <div id="HeadBlog">
    <div class="head-item">
      <div class="research">
        <el-input
            placeholder="请输入内容"
            v-model="research"
            clearable>
        </el-input>
      </div>
      <div class="blog-title">Frank Tsui的博客小站</div>
      <!--            <div class="music">-->
      <!--              <audio src="" controls></audio>-->
      <!--            </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "HeadBlog",
  data() {
    return {
      research: ""
    }
  }

}
</script>

<style scoped lang="scss">
#HeadBlog {
  z-index: 0;
  //padding: 0 10px 0 10px;
}

.head-item {
  width: 100%;
  position: absolute;
  background-color: black;
  top: 0;
  opacity: 0.9;
  //padding: 10px 10px 0 10px;
  height: 7vh;
  @media(max-width: 320px) {
    height: 5vh;
  }
}

.research {
  width: 20vw;  padding-left: 10px;
  position: absolute;
  margin-top: 6px;
  @media(max-width: 900px) {
    display: none;
  }
  @media(max-width: 320px) {
    display: none;
  }
}

.music {
  float: right;
  @media(max-width: 900px) {
    display: none;
  }
  @media(max-width: 320px) {
    display: none;
  }
}

.blog-title {
  margin-top: 1vh;
  font-size: 29px;
  font-weight: bold;
  text-align: center;
  color: white;
  @media(max-width: 320px) {
    font-size: 15px;
  }
}
</style>
