import { ExclamationCircleOutlined } from '@ant-design/icons-vue';

import { Modal } from 'ant-design-vue';
import { createVNode } from 'vue';

type ButtonType =
  | 'link'
  | 'default'
  | 'primary'
  | 'ghost'
  | 'dashed'
  | 'text'
  | 'danger';

interface IModalConfirm {
  title?: string;
  content?: string;
  okText?: string;
  cancelText?: string;
  okType?: ButtonType;
}

export function useModalConfirm(): () => Promise<any> {
  return (
    params: IModalConfirm = {
      title: '删除',
      content: '删除之后无法恢复哦，确定删除吗?',
      okText: '确认',
      cancelText: '取消',
      okType: 'danger'
    }
  ) =>
    new Promise((resolve) => {
      const { title, content, okText, cancelText, okType } = params;
      Modal.confirm({
        title,
        icon: createVNode(ExclamationCircleOutlined),
        content,
        okText,
        cancelText,
        okType,
        onOk: () => {
          resolve(true);
        },
        onCancel: () => {
          resolve(false);
        }
      });
    });
}
