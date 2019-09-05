<template lang="pug">
  .input-select
    v-autocomplete(
      v-if="autocomplete"
      :label="label"
      :readonly="readonly"
      :items="items"
      :item-text="itemText"
      :item-value="itemValue"
      :rules="getRules"
      :value="getValue"
      return-object
      :required="required"
      :disabled="disabled"
      @blur="onChange($event)"
      @input="onInput($event)"
      :placeholder="placeholder"
      :clearable="clearable"
      :loading="loading"
    )
    v-select(
      v-else
      :label="label"
      :readonly="readonly"
      :items="items"
      :item-text="itemText"
      :item-value="itemValue"
      :rules="getRules"
      :value="getValue"
      return-object
      :required="required"
      :disabled="disabled"
      @blur="onChange($event)"
      @input="onInput($event)"
      :placeholder="placeholder"
      :clearable="clearable"
      :loading="loading"
    )
</template>

<script>
export default {
  name: 'InputSelect',
  props: {
    label: {
      type: String,
      default: '',
    },
    itemText: {
      type: String,
      default: '',
    },
    itemValue: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
    },
    readonly: {
      type: Boolean,
    },
    clearable: {
      type: Boolean,
    },
    autocomplete: {
      type: Boolean,
    },
    loading: {
      type: Boolean,
    },
    items: {
      type: Array,
      default() {
        return [];
      },
    },
    value: {
      type: Object,
      default() {
        return {};
      },
    },
    rules: {
      type: Array,
      default() {
        return [];
      },
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
    },
  },
  data() {
    return {
      rulesDefault: {
        required: this.getRequiredRule(),
      },
    };
  },
  computed: {
    getValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
    getRules() {
      const newRulesArray = [];
      if (this.required) newRulesArray.push(this.rulesDefault.required);
      return newRulesArray.concat(this.rules);
    },
  },
  methods: {
    onChange() {
      this.getRules.forEach(func => func(this.getValue));
      this.$emit('change');
    },
    onInput(value) {
      this.getValue = value;
    },
    getRequiredRule() {
      return v => !!v[this.itemValue] || this.$t('support.components.inputs.required');
    },
  },
};
</script>
