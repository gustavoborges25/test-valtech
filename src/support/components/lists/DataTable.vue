<template lang="pug">
  v-data-table.data_table(
    :headers="headers"
    :items="pagination.data"
    :rows-per-page-text="$t('support.components.dataTable.rowsPerPageText')"
    :no-data-text="$t('support.components.dataTable.noDataText')"
    :no-results-text="$t('support.components.dataTable.noResultsText')"
    :rows-per-page-items="[10, 30, 50]"
    :pagination.sync="pagination"
    :total-items="pagination.totalItems"
  )
    template(
      v-slot:items="props"
    )
      slot(
        name="rows"
        :item="props.item"
      )
      td
        v-layout(
          justify-center
          align-center
          row
          v-if="!hideEdit && !hideDelete"
        )
          btn-action.lightgrey--text(
            icon="edit"
            :message="$t('support.components.dataTable.btnEdit')"
            @click="onClickEdit(props.item)"
            v-if="!hideEdit"
          )
          btn-action.lightgrey--text(
            ref="btnDelete"
            icon="delete"
            :message="$t('support.components.dataTable.btnDelete')"
            @click="onClickDelete(props.item)"
            v-if="!hideDelete"
          )
    template(
      slot="pageText"
      slot-scope="props"
    )
      span {{ showPagination(props) }}
</template>

<script>
import BtnAction from 'Support/components/buttons/BtnAction.vue';

export default {
  name: 'DataTable',
  components: {
    BtnAction,
  },
  props: {
    headers: {
      type: Array,
      required: true,
    },
    value: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
    hideDelete: {
      type: Boolean,
    },
    hideEdit: {
      type: Boolean,
    },
  },
  computed: {
    pagination: {
      get() {
        return {
          page: this.routePage.page,
          rowsPerPage: this.routePage.perPage,
          totalItems: this.value.total,
          data: this.value.data,
        };
      },
      set(value) {
        this.$router.push({
          query: {
            page: value.page,
            perPage: value.rowsPerPage,
          },
        });
      },
    },
    routePage() {
      const { page = 1, perPage = 10 } = this.$route.query;
      const routePage = {
        page: Number.parseInt(page, 0),
        perPage: Number.parseInt(perPage, 0),
      };
      this.$emit('update');
      return routePage;
    },
  },
  methods: {
    showPagination({ pageStart, pageStop, itemsLength }) {
      return this.$t('support.components.dataTable.pagination', {
        start: pageStart,
        end: pageStop,
        total: itemsLength,
      });
    },
    onClickEdit(item) {
      this.$emit('edit', item);
    },
    onClickDelete(item) {
      this.$emit('delete', item);
    },
  },
};
</script>
