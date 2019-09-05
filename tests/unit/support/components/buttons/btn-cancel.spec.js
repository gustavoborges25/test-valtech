import { mount } from '@vue/test-utils';
import '@test/base-test';
import BtnCancel from 'Support/components/buttons/BtnCancel.vue';

describe('BtnCancel.vue', () => {
  it('verify click btn cancel', () => {
    const wrapper = mount(BtnCancel);
    const button = wrapper.find('button');
    button.trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
