<template>
  <div id="bookShare">
    <h2>书享列表</h2>
    <div class="block">
      <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark">
        <el-table-column
            label="书名"
            show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row }}</template>
        </el-table-column>
        <el-table-column
            label="作者"
            show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row }}</template>
        </el-table-column>
        <el-table-column
            label="图片地址"
            show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row }}</template>
        </el-table-column>
        <el-table-column
            label="描述"
            show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row }}</template>
        </el-table-column>
        <el-table-column
            label="添加时间"
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
  name: "bool"
}
</script>

<style scoped lang="scss">

</style>
