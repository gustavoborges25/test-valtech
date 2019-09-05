import { mount } from '@vue/test-utils';
import '@test/base-test';
import InputRadio from 'Support/components/inputs/InputRadio.vue';

function factory(model = '') {
  return mount(InputRadio, {
    propsData: {
      value: model,
    },
  });
}

describe('InputRadio.vue', () => {
  it('set model and expecte value', () => {
    const wrapper = factory('1');
    expect(wrapper.vm.radio).toBe('1');
  });
  it('verify emmited event input', () => {
    const wrapper = factory('1');
    wrapper.vm.radio = '2';
    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input[0][0]).toEqual('2');
  });
});
