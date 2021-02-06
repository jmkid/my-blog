<template>
  <div id="friendLink">
    <h2>友链列表</h2>
    <div class="block">
      <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark">
        <el-table-column
            label="博客名"
            show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row.blogName }}</template>
        </el-table-column>
        <el-table-column
            label="博客地址"
            show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row.blogUrl }}</template>
        </el-table-column>
        <el-table-column
            label="博客图片URL"
            show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row.blogImg }}</template>
        </el-table-column>
        <el-table-column
            label="博客描述"
            show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row.blogDes }}</template>
        </el-table-column>
        <el-table-column
            label="操作"
            width="143">
          <template slot-scope="scope">
            <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑
            </el-button>
            <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "FriendLink",
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
    this.fetchFriend()
  },
  methods: {
    fetchFriend() {
      axios.get('/api/friendList').then(res => {
        this.tableData = res.data.data
      })
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      axios.post('/api/deleteItems', {
        itemCol: "friend",
        itemId: row._id
      }).then(res => {
        this.tableData = res.data.data
      }).catch(err => {

      })
    }
  }

}
</script>

<style scoped lang="scss">
#friendLink {

}

.el-table {
  width: 80vw;

  .cell {
    text-overflow: ellipsis;
    white-space: nowrap;
  }

}
</style>
