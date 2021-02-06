<template>
  <div id="time-line">
    <div class="block">
      <h2>更新</h2>
      <el-timeline>
        <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :icon="activity.icon"
            :type="activity.type"
            :color="activity.color"
            :size="activity.size"
            :timestamp="activity.timestamp">
          {{ activity.content }}
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "TimeLine",
  data() {
    return {
      activities: [
        //   {
        //   content: '完成了主页文章预览页面',
        //   timestamp: '2020-10-17 20:32',
        //   color: 'skyblue',
        //   icon: 'el-icon-more'
        // }, {
        //   content: '添加了网页时钟',
        //   timestamp: '2020-10-17 20:32',
        //   color: 'skyblue',
        //   icon: 'el-icon-more'
        // }, {
        //   content: '实现了前端主要界面',
        //   timestamp: '2020-10-16 20:46',
        //   color: 'skyblue',
        //   icon: 'el-icon-more'
        // }, {
        //   content: '添加了网页canvas',
        //   timestamp: '2020-10-16 20:46',
        //   size: 'large'
        // }, {
        //   content: '完成时间轴和网页整体的架构',
        //   timestamp: '2020-10-16 09:38',
        //   size: 'large'
        // }
      ]
    };
  },
  mounted() {
    this.fetchRenew()
  },
  methods: {
    fetchRenew() {
      axios.get('/api/renewList', {
        //获取更新内容
      }).then((res) => {
        console.log(res.data.data)
        for (let i in res.data.data) {
          this.activities.push({
            "content": res.data.data[i].renew_des,
            "timestamp": res.data.data[i].renew_date,
            "size": "large",
            "color": 'skyblue',
            "icon": 'el-icon-more'
          })
        }
      })
    }
  }
};
</script>

<style scoped lang="scss">
.main {
  display: block;
  background-color: white;
  //margin上 右 下  左
}

.block {
  margin-left: 6vw;
}
</style>