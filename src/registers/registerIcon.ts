import { App } from 'vue';
import { Avatar, CircleClose, HomeFilled, Menu, Tools, Promotion } from '@element-plus/icons-vue';

const components = [Avatar, CircleClose, HomeFilled, Menu, Tools, Promotion];

export default function (app: App): void {
  for (const icon of components) {
    app.component(icon.name, icon);
  }
}
