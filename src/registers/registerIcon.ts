import { App } from 'vue';
import { Edit, Avatar, Search, Delete, Refresh } from '@element-plus/icons-vue';

const components = [Edit, Avatar, Search, Delete, Refresh];

export default function (app: App): void {
  for (const icon of components) {
    app.component(icon.name, icon);
  }
}
