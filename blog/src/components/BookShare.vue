<template>
  <div id="Article">
    <div class="article-item" v-for="item in articleList" v-bind:key="item.index">
      <div class="article-up">
        <el-image
            class="article-img"
            :src=item.img
            :fit="fit"
            lazy>
          <div slot="placeholder" class="image-slot">
            加载中<span class="dot">...</span>
          </div>
        </el-image>
        <div class="text-right">
          <span class="flag">{{ item.flag }}</span>
          <span class="title">{{ item.title }}</span>
          <p class="des">{{ item.des }}</p>
        </div>
      </div>
      <div class="article-down">
        <span class="date">{{ item.date }}</span>
        <span class="markNum">{{ item.markNum }}条评论</span>
        <span class="like">{{ item.like }}人点赞</span>
        <span class="readAll">阅读全文</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      fit:"cover",
      articleList: [{
        img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        flag: '未分类',
        title: 'Hello，Frank',
        des: '这是我的第一篇文章，此内容仅用来测试，编辑或删除它，然后开始创作，长度测试长度测试长度测试长度测试度测试长度测试长度测试长度测试长度测试长度测试长度测试',
        date: '2020-10-16',
        markNum: '1',
        watch: '9999',
        like: '99999+',
      }]
    }
  },

}
</script>

<style scoped lang="scss">
.article-item {
  box-shadow: 0 0 10px #c8c7c7;
  padding: 20px 20px 5px 20px;
  margin-bottom: 20px;
}

.article-img {
  flex: 0 1 10vw;
  width: 10vw;
  height: 20vh;
  @media(max-width: 900px) {
    //width: 20vw;
  }
  @media(max-width: 320px) {
    display: none;
  }
}

.article-up {
  text-overflow:ellipsis;
  display: flex;
  height: 20vh;
  overflow: hidden;

  .text-right {
    margin: 10px;
    flex: 1;

    .flag {
      white-space: nowrap;display: inline;
      font-size: 10px;
      background-color: #7474e7;
      color: #FFF;
      padding: 3px;
      vertical-align: middle;
    }

    .title {
      display: inline;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 20px;
      vertical-align: middle;
    }

    .des {
      font-size: 13px;
      color: #696868;
    }
  }
}

.article-down {
  font-size: 12px;
  color: #696868;
  display: block;
  margin: 10px 0 0 0;
  border-top: #c8c7c7 1px solid;
  line-height: 20px;

  .date {
    margin: 0 10px 0 0;
    @media(max-width: 900px) {
      display: none;
    }
    @media(max-width: 320px) {
      display: none;
    }
  }

  .markNum {
    margin: 0 10px 0 0;
  }

  .like {
    //margin: 0 10px 0 0;
  }

  .readAll {
    float: right;
  }
}
</style>