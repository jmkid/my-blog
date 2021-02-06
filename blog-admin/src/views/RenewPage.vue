<template>
  <div id="renewPage">
    <div class="block">
      <div>
        <el-button @click="centerDialogVisible = true">添加数据</el-button>
        <el-dialog
            title="添加一条新纪录"
            :visible.sync="centerDialogVisible"
            width="30%"
            center>
          <el-input v-model="renewDes" placeholder="请输入本次更新内容"></el-input>
          <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible = false">取 消</el-button>
            <el-button
                type="primary"
                @click="sendRenew()"
                style="background-color: #409EFF">确 定</el-button>
          </span>
        </el-dialog>
      </div>
      <h2>更新内容管理</h2>
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
import axios from 'axios'

export default {
  name: "RenewPage",
  data() {
    return {
      centerDialogVisible: false,
      renewDes: "",
      activities: []
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
    },
    sendRenew() {
      let date = new Date();
      let myDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
      axios.post('/api/addRenew', {
        renew_date: myDate,
        renew_des: this.renewDes,
      }).then(res => {
        console.log(res)
        this.activities=[];
        for (let i in res.data.data) {
          this.activities.push({
            "content": res.data.data[i].renew_des,
            "timestamp": res.data.data[i].renew_date,
            "size": "large",
            "color": 'skyblue',
            "icon": 'el-icon-more'
          })
        }
      }).catch(err => {
        console.log(err)
      })
      this.centerDialogVisible = false
    },
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
