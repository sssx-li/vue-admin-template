import { ExclamationCircleOutlined } from '@ant-design/icons-vue';

import { Modal } from 'ant-design-vue';
import { createVNode } from 'vue';

interface IModalConfirm {
  title?: string;
  content?: string;
  okText?: string;
  cancelText?: string;
}

function useModalConfirm(
  params: IModalConfirm = {
    title: '删除',
    content: '删除之后无法恢复哦，确定删除吗?',
    okText: '确认',
    cancelText: '取消'
  }
) {
  return new Promise((resolve, reject) => {
    const { title, content, okText, cancelText } = params;
    Modal.confirm({
      title,
      icon: createVNode(ExclamationCircleOutlined),
      content,
      okText,
      cancelText,
      onOk: () => {
        resolve(true);
      },
      onCancel: () => {
        reject();
      }
    });
  });
}

export default useModalConfirm;
