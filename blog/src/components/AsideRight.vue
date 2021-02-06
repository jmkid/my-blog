<template>
  <div id="aside-right">
    <div class="aside-img">

    </div>
    <div class="container">
      <div class="head-img">
        <img src="../assets/headImg2.png" alt="头像"><br>
        <div class="head-text"><strong>FrankTsui的小小博客</strong></div>
        <div class="head-text">如果你是魔女的话<br>我只要成为魔王就可以了吧</div>
      </div>

      <div class="blog-info">
        本博客建立于2020/10/15 <br>
        文章数目:{{$store.state.articleNum}}<br>
        运行天数:{{ runningDays }}<br>
        最后活动:2020-10-17<br>
      </div>
      <div class="clock">
        <clock></clock>
      </div>
    </div>
  </div>
</template>

<script>
import clock from "@/components/clock";

export default {
  name: "AsideRight",
  components: {
    clock
  },
  data() {
    return {
      runningDays: '',
    }
  },
  mounted() {
    this.getTimes()
    localStorage.setItem("curTime", this.runningDays)
    localStorage.getItem("curTime")
  },

  methods: {
    getTimes() {
      let date = new Date()
      let curDate = new Date('10-15-2020');
      this.runningDays = Math.floor((date.getTime() - curDate.getTime()) / 1000 / 60 / 60 / 24);
    }
  }
}
</script>

<style scoped lang="scss">
#aside-right {
  position: sticky;
  top: 10vh;
  margin: 0 5px 0 5px;
}

.aside-img {
  //background-color: blue;
  background-image: url("../assets/cloud.png");
  background-size: 100% 100%;
  z-index: 9;
  height: 17vh;
  width: 100%;
  position: absolute;
}

.container {
  text-align: center;
  z-index: 0;
  background-color: white;
  margin-top: 80px;
  padding: 20px;
  box-shadow: 0 0 10px #c8c7c7;
  //flex-direction: column;
  //height: 100%;
}

.hot-article {
  flex: 1;
}

.blog-info {
  flex: 1;
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px #c8c7c7;
}

.head-img {
  z-index: 99999;
  margin-top: 5vh;
  margin-bottom: 10px;

  .head-text {
    text-align: center;
    font-size: 13px;
    margin-bottom: 10px;
    //@media(max-width: 700px) {
    //  font-size: 8vw;
    //}
    //@media(max-width: 320px) {
    //  font-size: 8vw;
    //}
  }

  img {
    display: block;
    width: 8vw;
    margin: 0 auto;
    border-radius: 10000px;
    //@media(max-width: 700px) {
    //  display: none;
    //}
    //@media(max-width: 320px) {
    //  display: none;
    //}
  }
}
</style>