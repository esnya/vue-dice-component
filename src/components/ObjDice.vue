<template lang="pug">
  .vue-dice-component-dice(:style="style" v-html="model.body")
</template>

<script>
const DiceProps = {
  face: {
    type: Number,
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
};

export default {
  computed: {
    style() {
      return {
        fill: this.backgroundColor,
        stroke: this.frameColor,
      };
    },
  },
  methods: {
    updateTextStyle() {
      this.$el.querySelectorAll('svg text').forEach((text) => {
        // eslint-disable-next-line no-param-reassign
        text.style.fill = this.color;
        // eslint-disable-next-line no-param-reassign
        text.style.stroke = 'none';
      });
    },
  },
  watch: {
    color() {
      this.updateTextStyle();
    },
    face(face, prev) {
      const { classPrefix } = this.model;
      const el = this.$el.querySelector(`.${classPrefix}`);
      if (!el) return;

      if (prev) el.classList.remove(`${classPrefix}-face${prev}`);
      if (face) el.classList.add(`${classPrefix}-face${face}`);
    },
  },
  mounted() {
    const styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    document.head.appendChild(styleElement);
    styleElement.outerHTML = this.model.style;
    this.updateTextStyle();
  },
  DiceProps,
  props: {
    ...DiceProps,
    model: {
      type: Object,
      required: true,
    },
  },
};
</script>
