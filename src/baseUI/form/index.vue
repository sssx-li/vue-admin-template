<template>
  <div class="form-container">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.field">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
              :prop="item.field"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :label="option.label"
                    :value="option.value"
                  />
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  type="daterange"
                  v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="form-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IFormItem } from './types';
export default defineComponent({
  name: 'LiForm',
  props: {
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemStyle: {
      type: Object,
      default: () => ({
        padding: '0px 10px'
      })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    },
    modelValue: {
      type: Object,
      required: true
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const handleValueChange = (value: any, field: string) => {
      emit('update:modelValue', { ...props.modelValue, [field]: value });
    };
    return {
      handleValueChange
    };
  }
});
</script>

<style lang="scss" scoped>
.form-footer {
  text-align: right;
}
</style>
