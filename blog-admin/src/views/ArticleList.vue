<template>
  <div id="ArticleList">
    <div v-for="item in articleList">
      <div class="article-up">
        <el-image
            class="article-img"
            :src=item.imgUrl
            :fit="fit"
            lazy>
          <div slot="placeholder" class="image-slot">
            加载中<span class="dot">...</span>
          </div>
        </el-image>
        <div class="text-right">
          <span class="flag">{{ item.flag }}</span>
          <span class="title">{{ item.title }}</span>
          <p class="des" v-html="item.des"></p>
        </div>
      </div>
      <div class="article-down">
        <span class="date">{{ item.date }}</span>
        <span class="markNum">{{ item.markNum }}条评论</span>
        <span class="like">{{ item.like }}人点赞</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "ArticleList",
  data() {
    return {
      fit: "scale-up",
      articleList: []
    }
  },
  mounted() {
    this.fetchList()
  },
  methods: {
    fetchList() {
      axios.get("/api/articleList").then((res) => {
        console.log(res)
        this.articleList = res.data.data
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped lang="scss">
#ArticleList {
  //padding: 20px;
}

.article-item {
  box-shadow: 0 0 10px #c8c7c7;
  padding: 20px 20px 5px 20px;
  margin-bottom: 20px;
}

.article-img {
  flex: 0 1 10vw;
  width: 10vw;
  height: 20vh;

  @media (max-width: 900px) {
    //width:20vw;
  }

  @media (max-width: 320px) {
    display: none;
  }

}

.article-up {
  text-overflow: ellipsis;
  display: flex;
  height: 16vh;
  overflow: hidden;

  .text-right {
    margin: 10px;
    flex: 1;

    .flag {
      white-space: nowrap;
      display: inline;
      font-size: 10px;
      background-color: #7474e7;
      color: #FFF;
      padding: 3px;
      vertical-align: middle;
      margin-right: 10px;
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
  //margin: 10px 0 0 0;
  border-top: #c8c7c7 1px solid;
  line-height: 20px;

  .date {
    margin: 0 10px 0 0;

    @media (max-width: 900px) {
      display: none;
    }

    @media (max-width: 320px) {
      display: none;
    }

  }

  .markNum {
    margin: 0 10px 0 0;
  }

  .like {
    // margin:0 10 px 0 0;
  }
}

.article-img {
  flex: 0 1 8vw;
  height: 15vh;
  @media(max-width: 900px) {
    //width: 20vw;
  }
  @media(max-width: 320px) {
    display: none;
  }
}
</style>