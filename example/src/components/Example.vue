<template>
  <div>
    <div>
      <label>Dice: </label>
      <button type="button" :key="value" @click="faces = value" v-for="value in facesList">
        D{{value}}
      </button>
    </div>

    <div>
      <label>First Color: </label>
      <Compact :value="{ hex: colors.first }" @input="colors.first = $event.hex" />
    </div>

    <div>
      <label>Text Color: </label>
      <Compact :value="{ hex: colors.text }" @input="colors.text = $event.hex" />
    </div>

    <div>
      <label>Frame Color: </label>
      <Compact :value="{ hex: colors.frame }" @input="colors.frame = $event.hex" />
    </div>

    <div>
      <label>Background Color: </label>
      <Compact :value="{ hex: colors.background }" @input="colors.background = $event.hex" />
    </div>

    <div>
      <label>Preset Angle: </label>
      <button @click="angle = null">Animate</button>
      <button :key="value" @click="angle = value" v-for="value in angleList">{{value}}</button>
    </div>

    <div :class="classNames">
      <dice
        :faces="faces"
        :angle="angle"
        :firstColor="colors.first"
        :color="colors.text"
        :frameColor="colors.frame"
        :backgroundColor="colors.background"
      />
    </div>
  </div>
</template>

<script>
import { Compact } from 'vue-color';

export default {
  components: {
    Compact,
  },
  computed: {
    angleList() {
      const list = [];
      for (let i = 1; i <= this.faces; i += 1) list.push(i);
      return list;
    },
    classNames() {
      return {
        animation: !this.angle,
        example: true,
      };
    },
    facesList() {
      return [4, 6, 10, 20];
    },
  },
  data: () => ({
    angle: null,
    colors: {
      first: '#F44E3B',
      text: '#000000',
      frame: '#000000',
      background: '#ffffff',
    },
    faces: 6,
  }),
};
</script>


<style scoped>
@keyframes example-rotation {
  0% {
    transform: rotateX(0deg) rotateY(0deg)
  }

  100% {
    transform: rotateX(360deg) rotateY(720deg)
  }
}

.example {
  position: relative;
  width: 50px;
  height: 50px;
  top: 50px;
  left: 50px;
}

.example :global(*) {
  transition: transform 0.4s ease-in-out;
}

.example.animation {
  animation: example-rotation 10s linear infinite;
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
}
</style>
