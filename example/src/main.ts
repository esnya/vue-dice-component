import Vue from 'vue';
import App from './App.vue';
// import Dice from 'vue-dice-component';
import Dice from '../../src';
import '../../src/styles/dice.styl';

Vue.use(Dice);

new Vue({
  render: h => h(App),
}).$mount('#app');
