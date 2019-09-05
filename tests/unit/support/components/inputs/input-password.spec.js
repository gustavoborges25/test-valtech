import { mount } from '@vue/test-utils';
import '@test/base-test';
import InputPassword from '@/support/components/inputs/InputPassword.vue';

function factory(model = '') {
  return mount(InputPassword, {
    mocks: {
      $t: () => 'msg error',
    },
    propsData: {
      value: model,
    },
  });
}

describe('InputPassword.vue', () => {
  it('set model and expected value', () => {
    const wrapper = factory('123mudar');
    expect(wrapper.vm.password).toBe('123mudar');
  });
  it('verify emmited input event', () => {
    const wrapper = factory('');
    wrapper.vm.password = '123mudar';
    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input[0][0]).toEqual('123mudar');
  });
  it('verify error rule required', () => {
    const wrapper = factory();
    expect(wrapper.vm.rulesNative.required()).toEqual('msg error');
  });
  it('verify props required', () => {
    const wrapper = factory();
    wrapper.setProps({
      required: true,
    });
    expect(wrapper.vm.getRules.length).toBe(1);
  });
  it('verify event click test', () => {
    const wrapper = factory();
    const button = wrapper.find('i');
    button.trigger('click');
    expect(wrapper.vm.show).toBe(true);
  });
});
