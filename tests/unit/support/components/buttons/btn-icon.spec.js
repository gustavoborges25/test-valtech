import { mount } from '@vue/test-utils';
import '@test/base-test';
import BtnIcon from 'Support/components/buttons/BtnIcon.vue';

function factory() {
  return mount(BtnIcon, {});
}

describe('BtnIcon.vue', () => {
  it('verifying if the component is an Vue Instance', () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
