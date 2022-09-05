import { App } from 'vue';
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  LoginOutlined,
  UserOutlined,
  HomeFilled,
  SkinFilled,
  FileFilled
} from '@ant-design/icons-vue';

const components = [
  CheckCircleOutlined,
  CloseCircleOutlined,
  LoginOutlined,
  UserOutlined,
  HomeFilled,
  SkinFilled,
  FileFilled
];

export default function (app: App): void {
  for (const icon of components) {
    app.component(icon.name, icon);
  }
}
