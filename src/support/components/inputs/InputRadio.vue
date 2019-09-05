<template lang="pug">
  .input_radio
    v-radio-group(
      v-model="radio"
      :row="row"
      :rules="rules"
    )
      v-radio.pr-3(
        color="primary"
        v-for="option in options"
        :key="option.value"
        :label="option.label"
        :value="option.value"
        :disabled="disabled"
      )
</template>

<script>
export default {
  name: 'InputRadio',
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    row: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    rules: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    radio: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>
