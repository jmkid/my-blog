<template>
  <div class="FileLine">
    <div class="block">
      <h2>归档</h2>
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
import axios from "axios";

export default {
  name: "FileLine",
  data() {
    return {
      activities: []
      // {
      //   content: '你好，世界',
      //       timestamp: '2018-04-12 20:46',
      //       size: 'large',
      //       type: 'primary',
      //       icon: 'el-icon-more'
      // }
    }
  },
  mounted() {
    this.getArticle()
  },
  methods: {
    getArticle() {
      axios.get('/api/articleList', {}).then((res) => {
        for (let i in res.data.data)
          this.activities.push({
            "content": res.data.data[i].title,
            "timestamp": res.data.data[i].date,
            "size": "large",
            "type": "primary",
            "icon": "el-icon-more"
          })
      })
    }
  }
}
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