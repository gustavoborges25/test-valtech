import { mount, createLocalVue } from '@vue/test-utils';
import '@test/base-test';
import VueRouter from 'vue-router';
import PageableMixin from 'Support/components/lists/mixins/pageable.mixin';
import Home from 'App/home/Home.vue';

function factory() {
  const localVue = createLocalVue();
  localVue.use(VueRouter);

  const routes = [{
    path: '/home',
    component: Home,
    name: 'Home',
  }];
  const router = new VueRouter({
    routes,
  });

  return mount(Home, {
    localVue,
    router,
    mocks: {
      getList: () => '',
    },
    mixins: [PageableMixin],
  });
}

describe('pageable.mixin.js', () => {
  it('verify openModalForm method', () => {
    const wrapper = factory();
    wrapper.vm.openModalForm();
    expect(wrapper.vm.dialogForm).toBeTruthy();
  });
  it('verify onClose method', () => {
    const wrapper = factory();
    wrapper.vm.onClose();
    expect(wrapper.vm.dialogForm).toBeFalsy();
    expect(wrapper.vm.dialogDelete).toBeFalsy();
    expect(wrapper.vm.dialogSuccess).toBeFalsy();
    expect(wrapper.vm.resourceId).toBe('');
    expect(wrapper.vm.hideEdit).toBeFalsy();
  });
  it('verify onSubmit method', () => {
    const wrapper = factory();
    wrapper.vm.onSubmit();
    expect(wrapper.vm.dialogSuccess).toBeTruthy();
  });
  it('verify onUpdate method', () => {
    const wrapper = factory();
    wrapper.vm.resourceId = '1';
    wrapper.vm.onUpdate();
    expect(wrapper.vm.resourceId).toBe('');
  });
  it('verify onClickEdit method', () => {
    const wrapper = factory();
    wrapper.vm.resourceId = '1';
    wrapper.vm.dialogForm = false;
    wrapper.vm.onClickEdit({ id: 10 });
    expect(wrapper.vm.resourceId).toBe(10);
    expect(wrapper.vm.dialogForm).toBeTruthy();
  });
  it('verify openDeleteModal method', () => {
    const wrapper = factory();
    wrapper.vm.openDeleteModal({ id: 10 });
    expect(wrapper.vm.dialogDelete).toBeTruthy();
    expect(wrapper.vm.resourceId).toBe(10);
  });
  it('verify getParams method', () => {
    const wrapper = factory();
    expect(wrapper.vm.getParams()).toEqual({ page: 1, perPage: 10 });
    wrapper.vm.$router.push({
      query: {
        page: 5,
        perPage: 30,
      },
    });
    expect(wrapper.vm.getParams()).toEqual({ page: 5, perPage: 30 });
  });
});
