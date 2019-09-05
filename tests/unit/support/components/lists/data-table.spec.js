import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import '@test/base-test';
import DataTable from '@/support/components/lists/DataTable.vue';
import BtnAction from '@/support/components/buttons/BtnAction.vue';

function createVue() {
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  const routes = [{ path: '/list', component: DataTable, query: { page: 1, perPage: 5 } }];
  const router = new VueRouter({
    routes,
  });
  return {
    localVue,
    router,
  };
}

function factory({ headers = [], value }) {
  const { localVue, router } = createVue();
  return mount(DataTable, {
    localVue,
    router,
    mocks: {
      $t: () => 'msg error',
    },
    stubs: {
      'btn-action': BtnAction,
    },
    propsData: {
      headers,
      value,
    },
  });
}

describe('DataTable.vue', () => {
  it('verify default props value', () => {
    const wrapper = factory({});
    expect(wrapper.vm.value).toEqual({});
  });
  it('verify method showPagination', () => {
    const value = {
      page: 2,
      rowsPerPage: 10,
      totalItems: 100,
      data: [
        {},
      ],
    };
    const wrapper = factory({ value });
    expect(wrapper.vm.value.page).toBe(2);
    expect(wrapper.vm.value.rowsPerPage).toBe(10);
    expect(wrapper.vm.value.totalItems).toBe(100);
    expect(wrapper.vm.value.data).toHaveLength(1);
  });
  it('verify method onClickEdit', () => {
    const value = {
      page: 2,
      rowsPerPage: 10,
      totalItems: 100,
      data: [
        {
          id: '1',
          name: 'Name',
        },
      ],
    };
    const wrapper = factory({ value });
    const buttons = wrapper.findAll(BtnAction);
    buttons.at(0).trigger('click');
    expect(wrapper.emitted().edit).toBeTruthy();
  });
  it('verify method onClickDelete', () => {
    const value = {
      page: 2,
      rowsPerPage: 10,
      totalItems: 100,
      data: [
        {
          id: '1',
          name: 'Name',
        },
      ],
    };
    const wrapper = factory({ value });
    const buttons = wrapper.findAll(BtnAction);
    buttons.at(1).trigger('click');
    expect(wrapper.emitted().delete).toBeTruthy();
  });
});
