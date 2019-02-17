import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Dice from '../../src/components/Dice.vue';

describe('Dice.vue', () => {
  it('renders D4 when passed', () => {
    const wrapper = mount(Dice, {
      propsData: {
        faces: 4,
      },
    });
    expect(wrapper.text()).to.include('4');
    expect(wrapper.text()).not.to.include('5');
  });

  it('renders D10 when passed', () => {
    const wrapper = mount(Dice, {
      propsData: {
        faces: 10,
      },
    });
    expect(wrapper.text()).to.include('0');
    expect(wrapper.text()).to.include('9');
    expect(wrapper.text()).not.to.include('10');
  });

  it('renders D20 when passed', () => {
    const wrapper = mount(Dice, {
      propsData: {
        faces: 20,
      },
    });
    expect(wrapper.text()).to.include('20');
  });
});
