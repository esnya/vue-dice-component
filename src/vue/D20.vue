<template>
  <div :class="classNames" :style="style">
    <div class="vue-dice-component-dice-face"><svg width="39" height="42"><polygon points="5.67959054110549,0 38.9294109186736,25.755174630730423 0,41.672767913289576"></polygon><text x="19.4647054593368" y="20.836383956644788" text-anchor="middle" dominant-baseline="central">1</text></svg></div><div class="vue-dice-component-dice-face"><svg width="37" height="43"><polygon points="36.42346971334913,42.057599999999994 0,21.028799999999997 36.42346971334913,0"></polygon><text x="18.211734856674564" y="21.028799999999997" text-anchor="middle" dominant-baseline="central">2</text></svg></div><div class="vue-dice-component-dice-face"><svg width="43" height="37"><polygon points="42.0583848365586,0 21.030059792595623,36.423713087604185 0,0.0007046061098545664"></polygon><text x="21.0291924182793" y="18.211856543802092" text-anchor="middle" dominant-baseline="central">3</text></svg></div><div class="vue-dice-component-dice-face"><svg width="43" height="37"><polygon points="42.0583848365586,36.423713087604185 0,36.42300848149433 21.030059792595623,0"></polygon><text x="21.0291924182793" y="18.211856543802092" text-anchor="middle" dominant-baseline="central">4</text></svg></div><div class="vue-dice-component-dice-face"><svg width="39" height="42"><polygon points="5.67959054110549,41.672767913289576 0,0 38.9294109186736,15.917593282559148"></polygon><text x="19.4647054593368" y="20.836383956644788" text-anchor="middle" dominant-baseline="central">5</text></svg></div><div class="vue-dice-component-dice-face"><svg width="37" height="43"><polygon points="0,42.057599999999994 0,0 36.42386482314831,21.028799999999997"></polygon><text x="18.211932411574153" y="21.028799999999997" text-anchor="middle" dominant-baseline="central">6</text></svg></div><div class="vue-dice-component-dice-face"><svg width="43" height="37"><polygon points="0,36.421997567074506 21.031093661778588,0 42.058239450035764,36.425073776971125"></polygon><text x="21.029119725017882" y="18.212536888485563" text-anchor="middle" dominant-baseline="central">7</text></svg></div><div class="vue-dice-component-dice-face"><svg width="39" height="42"><polygon points="33.24986068350604,0 38.930305151071394,41.672910935291156 0,25.7556813593114"></polygon><text x="19.465152575535697" y="20.836455467645578" text-anchor="middle" dominant-baseline="central">8</text></svg></div><div class="vue-dice-component-dice-face"><svg width="39" height="42"><polygon points="38.930305151071394,0 33.24986068350604,41.672910935291156 0,15.917229575979757"></polygon><text x="19.465152575535697" y="20.836455467645578" text-anchor="middle" dominant-baseline="central">9</text></svg></div><div class="vue-dice-component-dice-face"><svg width="43" height="37"><polygon points="21.031093661778588,36.425073776971125 0,0.0030762098966157225 42.058239450035764,0"></polygon><text x="21.029119725017882" y="18.212536888485563" text-anchor="middle" dominant-baseline="central">10</text></svg></div><div class="vue-dice-component-dice-face"><svg width="39" height="42"><polygon points="0,25.7556813593114 33.24986068350604,0 38.930305151071394,41.672910935291156"></polygon><text x="19.465152575535697" y="20.836455467645578" text-anchor="middle" dominant-baseline="central">11</text></svg></div><div class="vue-dice-component-dice-face"><svg width="43" height="37"><polygon points="42.058239450035764,36.425073776971125 0,36.421997567074506 21.031093661778588,0"></polygon><text x="21.029119725017882" y="18.212536888485563" text-anchor="middle" dominant-baseline="central">12</text></svg></div><div class="vue-dice-component-dice-face"><svg width="37" height="43"><polygon points="36.42386482314831,21.028799999999997 0,42.057599999999994 0,0"></polygon><text x="18.211932411574153" y="21.028799999999997" text-anchor="middle" dominant-baseline="central">13</text></svg></div><div class="vue-dice-component-dice-face"><svg width="43" height="37"><polygon points="42.058239450035764,0 21.031093661778588,36.425073776971125 0,0.0030762098966157225"></polygon><text x="21.029119725017882" y="18.212536888485563" text-anchor="middle" dominant-baseline="central">14</text></svg></div><div class="vue-dice-component-dice-face"><svg width="39" height="42"><polygon points="0,15.917229575979757 38.930305151071394,0 33.24986068350604,41.672910935291156"></polygon><text x="19.465152575535697" y="20.836455467645578" text-anchor="middle" dominant-baseline="central">15</text></svg></div><div class="vue-dice-component-dice-face"><svg width="43" height="37"><polygon points="21.030059792595623,36.423713087604185 0,0.0007046061098545664 42.0583848365586,0"></polygon><text x="21.0291924182793" y="18.211856543802092" text-anchor="middle" dominant-baseline="central">16</text></svg></div><div class="vue-dice-component-dice-face"><svg width="39" height="42"><polygon points="38.9294109186736,25.755174630730423 0,41.672767913289576 5.67959054110549,0"></polygon><text x="19.4647054593368" y="20.836383956644788" text-anchor="middle" dominant-baseline="central">17</text></svg></div><div class="vue-dice-component-dice-face"><svg width="37" height="43"><polygon points="36.42346971334913,0 36.42346971334913,42.057599999999994 0,21.028799999999997"></polygon><text x="18.211734856674564" y="21.028799999999997" text-anchor="middle" dominant-baseline="central">18</text></svg></div><div class="vue-dice-component-dice-face"><svg width="39" height="42"><polygon points="0,0 38.9294109186736,15.917593282559148 5.67959054110549,41.672767913289576"></polygon><text x="19.4647054593368" y="20.836383956644788" text-anchor="middle" dominant-baseline="central">19</text></svg></div><div class="vue-dice-component-dice-face"><svg width="43" height="37"><polygon points="0,36.42300848149433 21.030059792595623,0 42.0583848365586,36.423713087604185"></polygon><text x="21.0291924182793" y="18.211856543802092" text-anchor="middle" dominant-baseline="central">20</text></svg></div>
  </div>
</template>

<script>
export default {
  computed: {
    classNames() {
      const { face } = this;
      if (!face) {
        return {
          'vue-dice-component-dice': true,
        };
      }

      return {
        'vue-dice-component-dice': true,
        [`vue-dice-component-dice-face${face}`]: true,
      };
    },
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
  },
  mounted() {
    this.updateTextStyle();
  },
  props: {
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
  },
};
</script>

<style scoped>
.vue-dice-component-dice-face svg text {
  font-size: 15px;
}

/* Generated */
.vue-dice-component-dice {
  transform-origin: 0 0;
  position: relative;
}
.vue-dice-component-dice, .vue-dice-component-dice * {
  transform-style: preserve-3d;
}
.vue-dice-component-dice-face {
  position: absolute;
  top: 0;
  left: 0;
}
.vue-dice-component-dice-face:nth-child(1) {
  width: 0;
  height: 0;
  transform: matrix3d(0.9732498717149157, 0.22974918325622018, -1.3877787807814457e-17, 0, -0.13264838345264196, 0.5619172192420819, 0.8164884843564219, 0, 0.18758756241899704, -0.7946473126565935, 0.5773617193002608, 0, 5.962866666666668, -25.259066666666662, 18.351466666666663, 1);
}
.vue-dice-component-dice-face:nth-child(1) svg {
  transform: translate3d(-14.869667153259698px, -22.47598084800667px, 0);
}
.vue-dice-component-dice-face1 {
  transform: matrix3d(0.9732498717149157, -0.13264838345264196, 0.18758756241899704, 0, 0.2297491832562202, 0.5619172192420819, -0.7946473126565935, 0, 0, 0.8164884843564219, 0.5773617193002607, 0, 0, 0, 0, 1);
}
.vue-dice-component-dice-face:nth-child(2) {
  width: 0;
  height: 0;
  transform: matrix3d(0.7946529182093528, 0.607064032521578, 0, 0, 0, 0, 1, 0, 0.607064032521578, -0.7946529182093528, 0, 0, 19.296, -25.259066666666662, 0, 1);
}
.vue-dice-component-dice-face:nth-child(2) svg {
  transform: translate3d(-24.282313142232752px, -21.028799999999997px, 0);
}
.vue-dice-component-dice-face2 {
  transform: matrix3d(0.7946529182093528, 0, 0.607064032521578, 0, 0.607064032521578, 0, -0.7946529182093528, 0, 0, 1, 0, 0, 0, 0, 0, 1);
}
.vue-dice-component-dice-face:nth-child(3) {
  width: 0;
  height: 0;
  transform: matrix3d(0.8506755142302933, -0.5256911350679464, 0, 0, 0.18756345157953438, 0.30351593355784157, 0.9341830814717655, 0, -0.4910917644601644, -0.7946866732162342, 0.3567940166145117, 0, -15.6108, -25.259066666666662, 11.341866666666665, 1);
}
.vue-dice-component-dice-face:nth-child(3) svg {
  transform: translate3d(-21.029481543051407px, -12.141472564571348px, 0);
}
.vue-dice-component-dice-face3 {
  transform: matrix3d(0.8506755142302934, 0.18756345157953444, -0.49109176446016445, 0, -0.5256911350679465, 0.3035159335578416, -0.7946866732162343, 0, 0, 0.9341830814717658, 0.3567940166145117, 0, 0, 0, 0, 1);
}
.vue-dice-component-dice-face:nth-child(4) {
  width: 0;
  height: 0;
  transform: matrix3d(0.8506755142302933, -0.5256911350679464, 0, 0, -0.18756345157953438, -0.30351593355784157, 0.9341830814717655, 0, -0.4910917644601644, -0.7946866732162342, -0.3567940166145117, 0, -15.6108, -25.259066666666662, -11.341866666666665, 1);
}
.vue-dice-component-dice-face:nth-child(4) svg {
  transform: translate3d(-21.029481543051407px, -24.282240523032833px, 0);
}
.vue-dice-component-dice-face4 {
  transform: matrix3d(0.8506755142302934, -0.18756345157953444, -0.49109176446016445, 0, -0.5256911350679465, -0.3035159335578416, -0.7946866732162343, 0, 0, 0.9341830814717658, -0.3567940166145117, 0, 0, 0, 0, 1);
}
.vue-dice-component-dice-face:nth-child(5) {
  width: 0;
  height: 0;
  transform: matrix3d(0.9732498717149157, 0.22974918325622018, 1.3877787807814457e-17, 0, 0.13264838345264196, -0.5619172192420819, 0.8164884843564219, 0, 0.18758756241899704, -0.7946473126565935, -0.5773617193002608, 0, 5.962866666666668, -25.259066666666662, -18.351466666666663, 1);
}
.vue-dice-component-dice-face:nth-child(5) svg {
  transform: translate3d(-14.869667153259698px, -19.1967870652829px, 0);
}
.vue-dice-component-dice-face5 {
  transform: matrix3d(0.9732498717149157, 0.13264838345264196, 0.18758756241899704, 0, 0.2297491832562202, -0.5619172192420819, -0.7946473126565935, 0, 0, 0.8164884843564219, -0.5773617193002607, 0, 0, 0, 0, 1);
}
.vue-dice-component-dice-face:nth-child(6) {
  width: 0;
  height: 0;
  transform: matrix3d(0.1876083862823044, 0.9822439072840052, 0, 0, 0, 0, 1, 0, 0.9822439072840055, -0.18760838628230445, 0, 0, 31.221666666666668, -5.962866666666667, 0, 1);
}
.vue-dice-component-dice-face:nth-child(6) svg {
  transform: translate3d(-12.141288274382767px, -21.028799999999997px, 0);
}
.vue-dice-component-dice-face6 {
  transform: matrix3d(0.18760838628230445, 0, 0.9822439072840052, 0, 0.9822439072840055, 0, -0.1876083862823044, 0, 0, 1, 0, 0, 0, 0, 0, 1);
}
.vue-dice-component-dice-face:nth-child(7) {
  width: 0;
  height: 0;
  transform: matrix3d(0.5257852283228894, 0.8506173603198133, -2.7755575615628914e-17, 0, -0.7946325738113788, 0.4911798050972476, 0.3567933179062268, 0, 0.3034945902571426, -0.18759665611940676, 0.9341833483302227, 0, 9.648, -5.962866666666667, 29.693333333333328, 1);
}
.vue-dice-component-dice-face:nth-child(7) svg {
  transform: translate3d(-21.029777703938116px, -24.28235711468188px, 0);
}
.vue-dice-component-dice-face7 {
  transform: matrix3d(0.5257852283228895, -0.7946325738113785, 0.3034945902571426, 0, 0.8506173603198133, 0.4911798050972475, -0.18759665611940676, 0, 0, 0.35679331790622676, 0.9341833483302228, 0, 0, 0, 0, 1);
}
.vue-dice-component-dice-face:nth-child(8) {
  width: 0;
  height: 0;
  transform: matrix3d(0.2297765705927348, -0.9732434061459865, 0, 0, 0.5619581381264527, 0.1326747378712843, 0.816456039798982, 0, -0.7946104571424244, -0.18760246886473544, 0.5774075987339994, 0, -25.258799999999997, -5.962866666666667, 18.351466666666663, 1);
}
.vue-dice-component-dice-face:nth-child(8) svg {
  transform: translate3d(-24.06005527819248px, -22.476197431534185px, 0);
}
.vue-dice-component-dice-face8 {
  transform: matrix3d(0.22977657059273485, 0.5619581381264527, -0.7946104571424245, 0, -0.9732434061459868, 0.1326747378712843, -0.1876024688647355, 0, 0, 0.816456039798982, 0.5774075987339994, 0, 0, 0, 0, 1);
}
.vue-dice-component-dice-face:nth-child(9) {
  width: 0;
  height: 0;
  transform: matrix3d(0.2297765705927348, -0.9732434061459865, 0, 0, -0.5619581381264527, -0.1326747378712843, 0.816456039798982, 0, -0.7946104571424244, -0.18760246886473544, -0.5774075987339994, 0, -25.258799999999997, -5.962866666666667, -18.351466666666663, 1);
}
.vue-dice-component-dice-face:nth-child(9) svg {
  transform: translate3d(-24.06005527819248px, -19.19671350375697px, 0);
}
.vue-dice-component-dice-face9 {
  transform: matrix3d(0.22977657059273485, -0.5619581381264527, -0.7946104571424245, 0, -0.9732434061459868, -0.1326747378712843, -0.1876024688647355, 0, 0, 0.816456039798982, -0.5774075987339994, 0, 0, 0, 0, 1);
}
.vue-dice-component-dice-face:nth-child(10) {
  width: 0;
  height: 0;
  transform: matrix3d(0.5257852283228894, 0.8506173603198133, 2.7755575615628914e-17, 0, 0.7946325738113788, -0.4911798050972476, 0.3567933179062268, 0, 0.3034945902571426, -0.18759665611940676, -0.9341833483302227, 0, 9.648, -5.962866666666667, -29.693333333333328, 1);
}
.vue-dice-component-dice-face:nth-child(10) svg {
  transform: translate3d(-21.029777703938116px, -12.142716662289244px, 0);
}
.vue-dice-component-dice-face10 {
  transform: matrix3d(0.5257852283228895, 0.7946325738113785, 0.3034945902571426, 0, 0.8506173603198133, -0.4911798050972475, -0.18759665611940676, 0, 0, 0.35679331790622676, -0.9341833483302228, 0, 0, 0, 0, 1);
}
.vue-dice-component-dice-face:nth-child(11) {
  width: 0;
  height: 0;
  transform: matrix3d(-0.2297765705927348, 0.9732434061459865, 0, 0, -0.5619581381264527, -0.1326747378712843, 0.816456039798982, 0, 0.7946104571424244, 0.18760246886473544, 0.5774075987339994, 0, 25.258799999999997, 5.962866666666667, 18.351466666666663, 1);
}
.vue-dice-component-dice-face:nth-child(11) svg {
  transform: translate3d(-24.06005527819248px, -22.476197431534185px, 0);
}
.vue-dice-component-dice-face11 {
  transform: matrix3d(-0.22977657059273485, -0.5619581381264527, 0.7946104571424245, 0, 0.9732434061459868, -0.1326747378712843, 0.1876024688647355, 0, 0, 0.816456039798982, 0.5774075987339994, 0, 0, 0, 0, 1);
}
.vue-dice-component-dice-face:nth-child(12) {
  width: 0;
  height: 0;
  transform: matrix3d(-0.5257852283228894, -0.8506173603198133, -2.7755575615628914e-17, 0, 0.7946325738113788, -0.4911798050972476, 0.3567933179062268, 0, -0.3034945902571426, 0.18759665611940676, 0.9341833483302227, 0, -9.648, 5.962866666666667, 29.693333333333328, 1);
}
.vue-dice-component-dice-face:nth-child(12) svg {
  transform: translate3d(-21.029777703938116px, -24.28235711468188px, 0);
}
.vue-dice-component-dice-face12 {
  transform: matrix3d(-0.5257852283228895, 0.7946325738113785, -0.3034945902571426, 0, -0.8506173603198133, -0.4911798050972475, 0.18759665611940676, 0, 0, 0.35679331790622676, 0.9341833483302228, 0, 0, 0, 0, 1);
}
.vue-dice-component-dice-face:nth-child(13) {
  width: 0;
  height: 0;
  transform: matrix3d(-0.1876083862823044, -0.9822439072840052, 0, 0, 0, 0, 1, 0, -0.9822439072840055, 0.18760838628230445, 0, 0, -31.221666666666668, 5.962866666666667, 0, 1);
}
.vue-dice-component-dice-face:nth-child(13) svg {
  transform: translate3d(-12.141288274382767px, -21.028799999999997px, 0);
}
.vue-dice-component-dice-face13 {
  transform: matrix3d(-0.18760838628230445, 0, -0.9822439072840052, 0, -0.9822439072840055, 0, 0.1876083862823044, 0, 0, 1, 0, 0, 0, 0, 0, 1);
}
.vue-dice-component-dice-face:nth-child(14) {
  width: 0;
  height: 0;
  transform: matrix3d(-0.5257852283228894, -0.8506173603198133, 2.7755575615628914e-17, 0, -0.7946325738113788, 0.4911798050972476, 0.3567933179062268, 0, -0.3034945902571426, 0.18759665611940676, -0.9341833483302227, 0, -9.648, 5.962866666666667, -29.693333333333328, 1);
}
.vue-dice-component-dice-face:nth-child(14) svg {
  transform: translate3d(-21.029777703938116px, -12.142716662289244px, 0);
}
.vue-dice-component-dice-face14 {
  transform: matrix3d(-0.5257852283228895, -0.7946325738113785, -0.3034945902571426, 0, -0.8506173603198133, 0.4911798050972475, 0.18759665611940676, 0, 0, 0.35679331790622676, -0.9341833483302228, 0, 0, 0, 0, 1);
}
.vue-dice-component-dice-face:nth-child(15) {
  width: 0;
  height: 0;
  transform: matrix3d(-0.2297765705927348, 0.9732434061459865, 0, 0, 0.5619581381264527, 0.1326747378712843, 0.816456039798982, 0, 0.7946104571424244, 0.18760246886473544, -0.5774075987339994, 0, 25.258799999999997, 5.962866666666667, -18.351466666666663, 1);
}
.vue-dice-component-dice-face:nth-child(15) svg {
  transform: translate3d(-24.06005527819248px, -19.19671350375697px, 0);
}
.vue-dice-component-dice-face15 {
  transform: matrix3d(-0.22977657059273485, 0.5619581381264527, 0.7946104571424245, 0, 0.9732434061459868, 0.1326747378712843, 0.1876024688647355, 0, 0, 0.816456039798982, -0.5774075987339994, 0, 0, 0, 0, 1);
}
.vue-dice-component-dice-face:nth-child(16) {
  width: 0;
  height: 0;
  transform: matrix3d(-0.8506755142302933, 0.5256911350679464, 0, 0, -0.18756345157953438, -0.30351593355784157, 0.9341830814717655, 0, 0.4910917644601644, 0.7946866732162342, 0.3567940166145117, 0, 15.6108, 25.259066666666662, 11.341866666666665, 1);
}
.vue-dice-component-dice-face:nth-child(16) svg {
  transform: translate3d(-21.029481543051407px, -12.141472564571348px, 0);
}
.vue-dice-component-dice-face16 {
  transform: matrix3d(-0.8506755142302934, -0.18756345157953444, 0.49109176446016445, 0, 0.5256911350679465, -0.3035159335578416, 0.7946866732162343, 0, 0, 0.9341830814717658, 0.3567940166145117, 0, 0, 0, 0, 1);
}
.vue-dice-component-dice-face:nth-child(17) {
  width: 0;
  height: 0;
  transform: matrix3d(-0.9732498717149157, -0.22974918325622018, -1.3877787807814457e-17, 0, 0.13264838345264196, -0.5619172192420819, 0.8164884843564219, 0, -0.18758756241899704, 0.7946473126565935, 0.5773617193002608, 0, -5.962866666666668, 25.259066666666662, 18.351466666666663, 1);
}
.vue-dice-component-dice-face:nth-child(17) svg {
  transform: translate3d(-14.869667153259698px, -22.47598084800667px, 0);
}
.vue-dice-component-dice-face17 {
  transform: matrix3d(-0.9732498717149157, 0.13264838345264196, -0.18758756241899704, 0, -0.2297491832562202, -0.5619172192420819, 0.7946473126565935, 0, 0, 0.8164884843564219, 0.5773617193002607, 0, 0, 0, 0, 1);
}
.vue-dice-component-dice-face:nth-child(18) {
  width: 0;
  height: 0;
  transform: matrix3d(-0.7946529182093528, -0.607064032521578, 0, 0, 0, 0, 1, 0, -0.607064032521578, 0.7946529182093528, 0, 0, -19.296, 25.259066666666662, 0, 1);
}
.vue-dice-component-dice-face:nth-child(18) svg {
  transform: translate3d(-24.282313142232752px, -21.028799999999997px, 0);
}
.vue-dice-component-dice-face18 {
  transform: matrix3d(-0.7946529182093528, 0, -0.607064032521578, 0, -0.607064032521578, 0, 0.7946529182093528, 0, 0, 1, 0, 0, 0, 0, 0, 1);
}
.vue-dice-component-dice-face:nth-child(19) {
  width: 0;
  height: 0;
  transform: matrix3d(-0.9732498717149157, -0.22974918325622018, 1.3877787807814457e-17, 0, -0.13264838345264196, 0.5619172192420819, 0.8164884843564219, 0, -0.18758756241899704, 0.7946473126565935, -0.5773617193002608, 0, -5.962866666666668, 25.259066666666662, -18.351466666666663, 1);
}
.vue-dice-component-dice-face:nth-child(19) svg {
  transform: translate3d(-14.869667153259698px, -19.1967870652829px, 0);
}
.vue-dice-component-dice-face19 {
  transform: matrix3d(-0.9732498717149157, -0.13264838345264196, -0.18758756241899704, 0, -0.2297491832562202, 0.5619172192420819, 0.7946473126565935, 0, 0, 0.8164884843564219, -0.5773617193002607, 0, 0, 0, 0, 1);
}
.vue-dice-component-dice-face:nth-child(20) {
  width: 0;
  height: 0;
  transform: matrix3d(-0.8506755142302933, 0.5256911350679464, 0, 0, 0.18756345157953438, 0.30351593355784157, 0.9341830814717655, 0, 0.4910917644601644, 0.7946866732162342, -0.3567940166145117, 0, 15.6108, 25.259066666666662, -11.341866666666665, 1);
}
.vue-dice-component-dice-face:nth-child(20) svg {
  transform: translate3d(-21.029481543051407px, -24.282240523032833px, 0);
}
.vue-dice-component-dice-face20 {
  transform: matrix3d(-0.8506755142302934, 0.18756345157953444, 0.49109176446016445, 0, 0.5256911350679465, 0.3035159335578416, 0.7946866732162343, 0, 0, 0.9341830814717658, -0.3567940166145117, 0, 0, 0, 0, 1);
}
</style>
