import { Component } from 'vue';

declare module 'vue' {
  interface ComponentCustomProperties extends Component {
    $filters: any;
  }
}

declare global {
  const useConfirm: typeof import('../hooks')['useConfirm'];
  const useEcharts: typeof import('../hooks')['useEcharts'];
  const useFormValidate: typeof import('../hooks')['useFormValidate'];
  const useMessage: typeof import('../hooks')['useMessage'];
  const usePageContent: typeof import('../hooks')['usePageContent'];
}
