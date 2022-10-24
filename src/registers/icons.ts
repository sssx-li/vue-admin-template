import type { App } from 'vue';
import {
  LoginOutlined,
  UserOutlined,
  HomeFilled,
  SettingOutlined,
  FolderOutlined,
  SnippetsOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  FileOutlined,
  TableOutlined,
  UnorderedListOutlined
} from '@ant-design/icons-vue';
const components = [
  LoginOutlined,
  UserOutlined,
  HomeFilled,
  SettingOutlined,
  FolderOutlined,
  SnippetsOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  FileOutlined,
  TableOutlined,
  UnorderedListOutlined
];

export default function (app: App): void {
  for (const icon of components) {
    app.component(icon.name, icon);
  }
}
