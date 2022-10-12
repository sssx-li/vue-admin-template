type IFormType =
  | 'input'
  | 'password'
  | 'textarea'
  | 'datepicker'
  | 'monthpicker'
  | 'rangepicker'
  | 'weekpicker'
  | 'select'
  | 'switch'
  | 'cascader'
  | 'other';
type ILayoutType = 'horizontal' | 'vertical' | 'inline';
type ISizeType = 'large' | 'default' | 'small';
interface IOptions {
  label: string | number;
  value: string | number;
}

export interface IFormItem {
  field: string; // 对应表单数据具体字段
  type: IFormType; // 表单元素类型
  label?: string;
  rules?: any[]; // 校验规则
  placeholder?: any;
  defaultValue?: any; // 参数默认值
  options?: IOptions[]; // 选择框选项数据
  otherOptions?: any; // 针对特殊的属性
  maxlength?: number; // 最大长度
  disabled?: boolean; // 是否禁用
  readonly?: boolean; // 是否只读
  beforeContent?: any; // 输入框前置内容
  afterContent?: any; // 输入框后置内容
  dateFormat?: string | []; // 日期格式(用于日期时间选择器)
  showTime?: boolean; // 是否增加时间选择功能
}

export interface IForm {
  name?: string; // 匹配页面
  formItems: IFormItem[]; // 表单数据
  labelCol?: object;
  wrapperCol?: object;
  size?: ISizeType; // 表单元素尺寸
  colLayout?: any;
  itemStyle?: any;
  immediate?: boolean; // 是否同步输入校验
  layout?: ILayoutType;
  disabled?: any; // 禁用属性
  url?: string;
}
