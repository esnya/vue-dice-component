import Vue from 'vue';
import App from './App.vue';
// import Dice from 'vue-dice-component';
import Dice from '../../src';

Vue.use(Dice);

new Vue({
  render: h => h(App),
}).$mount('#app');
