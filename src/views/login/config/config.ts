import type { FormRules } from 'element-plus';
import { reactive } from 'vue';
export const rules = reactive<FormRules>({
  username: [
    {
      required: true,
      message: '请输入账号',
      trigger: 'blur'
    },
    { min: 3, max: 5, message: '3-5', trigger: 'blur' }
  ],
  password: [
    {
      required: true,
      message: '密码是必传内容~',
      trigger: 'blur'
    }
  ]
});
