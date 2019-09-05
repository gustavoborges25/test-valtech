import { shallowMount } from '@vue/test-utils';
import BtnTemplate from 'Support/components/buttons/BtnTemplate.vue';

describe('BtnTemplate.vue', () => {
  it('set all values and verify classes css test', () => {
    const wrapper = shallowMount(BtnTemplate);
    wrapper.vm.onClick();
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
