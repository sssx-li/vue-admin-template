import { formatDate } from '@/utils/dateFormat';
import { App } from 'vue';

export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(value: string, format?: string) {
      return formatDate(value, format);
    }
  };
}

export interface IFilters {
  formatTime: (value: string, format?: string) => string;
}
