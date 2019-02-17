import Vue from 'vue';

// import Dice from 'vue-dice-component';
// import 'vue-dice-component/lib/dice.css';
import Dice from '../../../';
import '../../../lib/dice.css';

import Example from './Example.vue';

Vue.use(Dice);
new Vue(Example).$mount('#app');
