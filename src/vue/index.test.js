/* eslint-env jest */
/* eslint import/no-extraneous-dependencies: [error, { devDependencies: true }] */
/* eslint global-require: off */

describe('vue-dice-component', () => {
  it('should exposes component', () => {
    const DiceMock = {};
    jest.setMock('./Dice.vue', DiceMock);

    const Vue = {
      component: jest.fn(),
    };

    const VueDiceComponent = require('.').default;
    VueDiceComponent(Vue);

    expect(Vue.component).toBeCalledWith('dice', DiceMock);
  });
});
