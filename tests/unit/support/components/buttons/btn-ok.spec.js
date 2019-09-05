import { mount } from '@vue/test-utils';
import '@test/base-test';
import BtnOk from 'Support/components/buttons/BtnOk.vue';

function factory() {
  return mount(BtnOk, {});
}

describe('BtnOk.vue', () => {
  it('verifying if the component is an Vue Instance', () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
