<template>
  <div>
    <div>
      <button @click="faces = 6">D6</button>
      <button @click="faces = 10">D10</button>
    </div>
    <div>
      <label for="#color">Color</label>
      <input type="color" name="color" id="color" v-model="color">
    </div>
    <div>
      <label for="#first-color">FirstColor</label>
      <input type="color" name="first-color" id="first-color" v-model="firstColor">
    </div>
    <div>
      <label for="#background-color">BackgroundColor</label>
      <input type="color" name="background-color" id="background-color" v-model="backgroundColor">
    </div>
    <div>
      <label for="#frame-color">FrameColor</label>
      <input type="color" name="frame-color" id="frame-color" v-model="frameColor">
    </div>
    <div>
      <label for="#angle">Preset Angles</label>
      <input type="number" name="angle" id="angle" min="0" :max="faces" v-model="angle">
    </div>
    <div>
      <label for="#angle-x">Angle X</label>
      <input type="range" name="angle-x" id="angle-x" min="-180" max="180" v-model="ax">
    </div>
    <div>
      <label for="#angle-y">Angle Y</label>
      <input type="range" name="angle-y" id="angle-y" min="-180" max="180" v-model="ay">
    </div>
    <div>
      <label for="#angle-z">Angle Z</label>
      <input type="range" name="angle-z" id="angle-z" min="-180" max="180" v-model="az">
    </div>
    <div>
      <button @click="reset">Reset</button>
    </div>
    <div class="container">
      <dice
        :angle="Number(angle)"
        :faces="Number(faces)"
        :color="color"
        :firstColor="firstColor"
        :backgroundColor="backgroundColor"
        :frameColor="frameColor"
        :style="style"
      ></dice>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    style() {
      return {
        transform: this.angle ? null : `rotateX(${this.ax}deg) rotateY(${this.ay}deg) rotateZ(${this.az}deg)`,
      };
    },
  },
  data() {
    return {
      angle: 0,
      ax: 0,
      ay: 0,
      az: 0,
      faces: 6,
      color: '#000000',
      firstColor: '#ff0000',
      backgroundColor: '#ffffff',
      frameColor: '#000000',
    };
  },
  methods: {
    reset() {
      Object.assign(this, {
        angle: 0,
        ax: 0,
        ay: 0,
        az: 0,
      });
    },
  },
};
</script>

<style scoped>
.container {
  display: inline-block;
  padding: 30px;
  perspective: 500px;
}
.container .dice {
  transition: transform .2s ease-in-out;
}
</style>
