<template>
  <div id="mesPage">
    <h2>留言列表</h2>
    <div class="block">
      <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark">
        <el-table-column
            label="昵称"
            show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row }}</template>
        </el-table-column>
        <el-table-column
            label="Email"
            show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row }}</template>
        </el-table-column>
        <el-table-column
            label="网站URL"
            show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row }}</template>
        </el-table-column>
        <el-table-column
            label="留言内容"
            show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row }}</template>
        </el-table-column>
        <el-table-column
            label="留言时间"
            show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row }}</template>
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
export default {
  name: "mesPage"
}
</script>

<style scoped lang="scss">

</style>
