import { message } from 'ant-design-vue';

function useMessage() {
  const success = (msg: string, duration?: number) => {
    message.success(msg, duration);
  };
  const error = (msg: string, duration?: number) => {
    message.error(msg, duration);
  };
  const info = (msg: string, duration?: number) => {
    message.info(msg, duration);
  };
  const warning = (msg: string, duration?: number) => {
    message.warning(msg, duration);
  };
  const loading = (msg: string, duration?: number) => {
    message.loading(msg, duration);
  };
  return {
    success,
    error,
    info,
    warning,
    loading
  };
}

export { useMessage };
