<template lang="pug">
  svg.dice-face(v-if="faces === 6")
    g.dice-surface(:style="surfaceStyle")
      rect(
        :width="size"
        :height="size"
      )
    g.dice-number(v-if="face === 1", :style="numberStyle")
      circle(:cx="size * 0.50", :cy="size * 0.50", :r="size / 6")
    g.dice-number(v-else-if="face === 2", :style="numberStyle")
      circle(:cx="size * 0.25", :cy="size * 0.25", :r="size / 10")
      circle(:cx="size * 0.75", :cy="size * 0.75", :r="size / 10")
    g.dice-number(v-else-if="face === 3", :style="numberStyle")
      circle(:cx="size * 0.25", :cy="size * 0.25", :r="size / 10")
      circle(:cx="size * 0.50", :cy="size * 0.50", :r="size / 10")
      circle(:cx="size * 0.75", :cy="size * 0.75", :r="size / 10")
    g.dice-number(v-else-if="face === 4", :style="numberStyle")
      circle(:cx="size * 0.25", :cy="size * 0.25", :r="size / 10")
      circle(:cx="size * 0.75", :cy="size * 0.75", :r="size / 10")
      circle(:cx="size * 0.25", :cy="size * 0.75", :r="size / 10")
      circle(:cx="size * 0.75", :cy="size * 0.25", :r="size / 10")
    g.dice-number(v-else-if="face === 5", :style="numberStyle")
      circle(:cx="size * 0.25", :cy="size * 0.25", :r="size / 10")
      circle(:cx="size * 0.75", :cy="size * 0.75", :r="size / 10")
      circle(:cx="size * 0.25", :cy="size * 0.75", :r="size / 10")
      circle(:cx="size * 0.75", :cy="size * 0.25", :r="size / 10")
      circle(:cx="size * 0.50", :cy="size * 0.50", :r="size / 10")
    g.dice-number(v-else-if="face === 6", :style="numberStyle")
      circle(:cx="size * 0.25", :cy="size * 0.25", :r="size / 10")
      circle(:cx="size * 0.75", :cy="size * 0.75", :r="size / 10")
      circle(:cx="size * 0.25", :cy="size * 0.75", :r="size / 10")
      circle(:cx="size * 0.75", :cy="size * 0.25", :r="size / 10")
      circle(:cx="size * 0.25", :cy="size * 0.50", :r="size / 10")
      circle(:cx="size * 0.75", :cy="size * 0.50", :r="size / 10")
  svg.dice-face(v-else)
    g.dice-surface(:style="surfaceStyle")
      polygon(v-if="faces === 10")(
        :points="[-sin46, sqrt2, 0, 0, sin46, sqrt2].map(a => a * size * 0.5).join(' ')"
      )
    g.dice-number(:style="numberStyle")
      text(:x="size / 2", :y="size / 2") {{faceText}}
</template>

<script>
export default {
  computed: {
    faceText() {
      if (this.faces === 10 && this.face === 10) return 0;
      return this.face;
    },
    surfaceStyle() {
      return {
        fill: this.backgroundColor,
        stroke: this.frameColor,
      };
    },
    numberStyle() {
      return {
        fill: this.face === 1 ? this.firstColor : this.color,
      };
    },
  },
  data() {
    return {
      sqrt2: Math.SQRT2,
      sin46: Math.sin((46 * Math.PI) / 180),
      cos30: Math.cos(Math.PI / 3),
      sin30: Math.sin(Math.PI / 3),
      sin90: Math.sin(Math.PI),
      size: 60,
    };
  },
  props: {
    face: {
      type: Number,
      required: true,
      validate(value) {
        return value > 0 && Math.floor(value) === value;
      },
    },
    faces: {
      type: Number,
      required: true,
      validate(value) {
        return value > 0 && Math.floor(value) === value;
      },
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
