<template lang="pug">
  obj-dice(v-bind="$props" :model="model")
</template>

<script>
import * as model from '../../models/d20.obj';
import ObjDice from './ObjDice.vue';

export default {
  components: {
    ObjDice,
  },
  computed: {
    model: () => model,
  },
  props: ObjDice.DiceProps,
};
</script>
