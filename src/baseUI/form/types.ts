type IFormType =
  | 'input'
  | 'password'
  | 'select'
  | 'datepicker'
  | 'checkbox'
  | 'radio'
  | 'textarea';

interface ISelectOption {
  label: string;
  value: string | number;
}

export interface IFormItem {
  type: IFormType;
  label: string;
  field?: string;
  rules?: any[];
  placeholder?: string;
  options?: ISelectOption[];
  otherOptions?: any;
}

export interface IForm {
  formItems: IFormItem[];
  labelWidth?: string;
  colLayout?: any;
  itemStyle?: any;
}
