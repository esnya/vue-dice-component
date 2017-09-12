<template lang="pug">
  .dice(:class="classNames")
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
import DiceFace from './DiceFace.vue';

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
