<template>
  <div class="table-container">
    <div class="table-header">
      <slot name="header">
        <h3>{{ title }}</h3>
        <div class="table-right">
          <slot name="headerRight"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="listData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
      row-key="id"
      v-bind="childrenProps"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        width="80"
        align="center"
      ></el-table-column>
      <template v-for="propItem in propList" :key="propItem.name">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="table-footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          :currentPage="page.page"
          :page-size="page.size"
          :page-sizes="[10, 20, 30]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'LiTable',
  props: {
    title: {
      type: String,
      default: ''
    },
    listData: {
      type: Array,
      required: true
    },
    listCount: {
      type: Number,
      default: 0
    },
    propList: {
      type: Array as PropType<any>,
      required: true
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    page: {
      type: Object,
      default: () => ({ page: 1, size: 10 })
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    childrenProps: {
      type: Object,
      default: () => {}
    }
  },
  emits: ['selectionChange', 'update:page'],
  setup(props, { emit }) {
    // 方法
    const handleSelectionChange = (value: any) => {
      emit('selectionChange', value);
    };

    const handleCurrentChange = (page: number) => {
      emit('update:page', { ...props.page, page });
    };
    const handleSizeChange = (size: number) => {
      emit('update:page', { ...props.page, size });
    };
    return {
      handleSelectionChange,
      handleCurrentChange,
      handleSizeChange
    };
  }
});
</script>

<style lang="scss" scoped>
.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.table-footer {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  &:empty {
    margin-top: 0;
  }
}
::v-deep .el-table .el-table__cell {
  z-index: auto;
}
</style>
