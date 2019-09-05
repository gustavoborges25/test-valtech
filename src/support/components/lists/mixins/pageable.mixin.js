export default {
  data() {
    return {
      dialogForm: false,
      dialogDelete: false,
      dialogSuccess: false,
      resourceId: '',
      pagination: {},
      hideEdit: false,
    };
  },
  methods: {
    openModalForm() {
      this.dialogForm = true;
    },
    onClose() {
      this.dialogForm = false;
      this.dialogDelete = false;
      this.dialogSuccess = false;
      this.resourceId = '';
      this.hideEdit = false;
    },
    onSubmit() {
      this.dialogSuccess = true;
      this.onUpdatePagination();
    },
    onUpdate() {
      this.resourceId = '';
    },
    onClickEdit({ id }) {
      this.resourceId = id;
      this.dialogForm = true;
    },
    openDeleteModal({ id }) {
      this.dialogDelete = true;
      this.resourceId = id;
    },
    onUpdatePagination() {
      this.getList();
    },
    getParams() {
      const { page = 1, perPage = 10 } = this.$route.query;
      return {
        page,
        perPage,
      };
    },
  },
};
