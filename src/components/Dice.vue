<template lang="pug">
  .vue-dice-component-container(v-if="faces === 4")
    d4(
      :color="color"
      :frameColor="frameColor"
      :backgroundColor="backgroundColor"
      :face="angle"
    )
  .vue-dice-component-container(v-else-if="faces === 20")
    d20(
      :color="color"
      :frameColor="frameColor"
      :backgroundColor="backgroundColor"
      :face="angle"
    )
  .dice(:class="classNames" v-else)
    dice-face(
      v-for="n in faceNumbers"
      :key="n"
      :face="n"
      :faces="faces"
      :color="color"
      :firstColor="firstColor"
      :backgroundColor="backgroundColor"
      :frameColor="frameColor"
    )
</template>

<script>
import D4 from './D4.vue';
import D20 from './D20.vue';
import DiceFace from './DiceFace.vue';
import '../styles/dice.styl';

const FaceProp = {
  type: Number,
  default: 1,
  required: false,
  validator(value) {
    return value > 0 && Math.floor(value) === value;
  },
};

export default {
  components: {
    D4,
    D20,
    DiceFace,
  },
  computed: {
    classNames() {
      return {
        [`d${this.faces}`]: true,
        [`a${this.angle}`]: Boolean(this.angle),
      };
    },
    faceNumbers() {
      const faceNumbers = new Array(this.faces);
      // eslint-disable-next-line
      for (let i = 0; i < this.faces; i++) faceNumbers[i] = i + 1;
      return faceNumbers;
    },
  },
  props: {
    faces: FaceProp,
    face: FaceProp,
    angle: {
      type: Number,
      default: null,
      required: false,
    },
    color: {
      type: String,
      required: false,
    },
    frameColor: {
      type: String,
      required: false,
    },
    backgroundColor: {
      type: String,
      required: false,
    },
    firstColor: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="stylus" scoped>
.vue-dice-component-container
  position relative
  width 60px
  height 60px
  top 30px
  left 30px
  transform-style preserve-3d
</style>
