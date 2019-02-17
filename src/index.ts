import Vue, { VueConstructor } from 'vue';

import Dice from './components/Dice.vue';

export default {
  install(vue: VueConstructor<Vue>, options?: {}): void {
    vue.component('dice', Dice);
  },
};
