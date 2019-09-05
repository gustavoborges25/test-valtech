import { mount } from '@vue/test-utils';
import '@test/base-test';
import InputEmail from '@/support/components/inputs/InputEmail.vue';

function factory(model = '') {
  return mount(InputEmail, {
    mocks: {
      $t: () => 'msg error',
    },
    propsData: {
      value: model,
    },
  });
}

describe('InputEmail.vue', () => {
  it('set model and expected value', () => {
    const wrapper = factory('teste@teste.com.br');
    expect(wrapper.vm.email).toBe('teste@teste.com.br');
  });
  it('verify emmited input event', () => {
    const wrapper = factory('teste123@teste.com.br');
    wrapper.vm.email = 'teste@teste.com.br';
    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input[0][0]).toEqual('teste@teste.com.br');
  });
  it('verify error rule required', () => {
    const wrapper = factory('teste@teste.com.br');
    expect(wrapper.vm.rules[0]()).toEqual('msg error');
  });
  it('verify rule invalid email', () => {
    const wrapper = factory('teste@dafdsf.com');
    expect(wrapper.vm.rules[1]('teste')).toEqual('msg error');
  });
  it('verify rule required', () => {
    const wrapper = factory('teste@teste.com.br');
    expect(wrapper.vm.rules[0]('teste@teste.com.br')).toBe(true);
  });
  it('verify rule valid email', () => {
    const wrapper = factory('teste@dafdsf.com');
    expect(wrapper.vm.rules[1]('teste@teste.com.br')).toBe(true);
  });
  it('verify update error test', () => {
    const wrapper = factory('teste@teste.com');
    const input = wrapper.find('input');
    input.trigger('update:error');
    expect(wrapper.vm.isValid).toBeTruthy();
  });
  it('verify icon with valid email test', () => {
    const wrapper = factory('teste@teste.com.br');
    wrapper.vm.isValid = true;
    expect(wrapper.vm.icon).toBe('warning');
  });
  it('verify icon with invalid email test', () => {
    const wrapper = factory('teste@teste.com.br');
    wrapper.vm.isValid = false;
    expect(wrapper.vm.icon).toBe('check');
  });
  it('verify icon with no email', () => {
    const wrapper = factory();
    expect(wrapper.vm.icon).toBe('');
  });
});
