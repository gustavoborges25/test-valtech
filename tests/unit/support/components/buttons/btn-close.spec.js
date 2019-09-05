import { mount } from '@vue/test-utils';
import '@test/base-test';
import BtnClose from 'Support/components/buttons/BtnClose.vue';

function factory() {
  return mount(BtnClose, {});
}

describe('BtnClose.vue', () => {
  it('verifying if the component is an Vue Instance', () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
