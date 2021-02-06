<template>
  <div id="friend-link">
    <div class="block">
      <h2>友链</h2>
      <div class="flink-list-item" v-for="item in friendList" v-bind:key="item.blogUrl">
        <a :href=item.blogUrl target="_blank">
          <img :src=item.blogImg
               onerror="this.onerror=null;this.src='https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'">
          <h3>{{ item.blogName }}</h3>
          <span>{{ item.blogDes }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "FriendLink",
  data() {
    return {
      friendList: [
        // {
        //   img: "https://www.lvzhenbo.xyz/wp-content/uploads/2020/08/8dccb4.gif",
        //   url: "https://www.lvzhenbo.xyz/",
        //   name: "某二次元波波的博客",
        //   des: "博客而已"
        // }, {
        //   img: "",
        //   url: "http://www.tiyanfu.vip/",
        //   name: "视频小站",
        //   des: "发现快乐"
        // }
      ]
    }
  },
  mounted() {
    this.fetchFriend()
  },
  methods: {
    fetchFriend() {
      axios.get('api/friendList').then(res => {
        // console.log(res)
        this.friendList = res.data.data
      })
    }
  }
}
</script>

<style scoped lang="scss">
.flink-list-item {
  display: inline-block;
  margin: 0 5vw 5vh 5vw;
  text-overflow: ellipsis;
  white-space: nowrap;

  a {
    display: inline-block;

    h3 {
      display: inline-block;
      margin: 0 0 17px 10px;
    }

    img {
      width: 60px;
      height: 60px;
      border-radius: 500px;
      float: left;
      margin-right: 10px;
    }

    span {
      display: block;
      margin-left: 80px;
    }
  }

}
</style>
