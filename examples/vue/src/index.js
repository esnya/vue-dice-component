import Vue from 'vue';

// import Dice from 'dice-component';
// import 'dice-component/lib/dice.css';
import Dice from '../../../src/vue';
import '../../../lib/dice.css';

import Example from './Example.vue';

Vue.use(Dice);
new Vue(Example).$mount('#app');
