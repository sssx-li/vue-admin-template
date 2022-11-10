import { Component } from 'vue';

declare module 'vue' {
  export interface ComponentCustomProperties extends Component {
    $filters: any;
  }
}
