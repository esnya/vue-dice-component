/* eslint-env jest */
/* eslint import/no-extraneous-dependencies: [error, { devDependencies: true }] */
/* eslint global-require: off */

describe('Dice', () => {
  function render(options) {
    const Vue = require('vue');
    const Dice = require('./Dice.vue');

    return new Vue({
      components: { Dice },
      render: createElement => createElement(Dice, options),
    }).$mount();
  }

  it('should render', () => {
    const vm = render();
    expect(vm.$el).toMatchSnapshot();
  });

  it('should render D6', () => {
    const vm = render({
      props: {
        faces: 6,
        angle: 2,
      },
    });
    expect(vm.$el).toMatchSnapshot();
  });

  it('should render D10', () => {
    const vm = render({
      props: {
        faces: 10,
        angle: 8,
      },
    });
    expect(vm.$el).toMatchSnapshot();
  });
});
