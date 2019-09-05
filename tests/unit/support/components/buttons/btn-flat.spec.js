import { mount } from '@vue/test-utils';
import '@test/base-test';
import BtnFlat from 'Support/components/buttons/BtnFlat.vue';

function factory(icon = '') {
  return mount(BtnFlat, {
    propsData: {
      icon,
    },
  });
}

describe('BtnFlat.vue', () => {
  it('verifying if the component is an Vue Instance', () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
