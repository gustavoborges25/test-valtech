<template lang="pug">
  .input-text
    v-text-field(
      :label="label"
      :type="type"
      v-model="getValue"
      :required="required"
      :readonly="readonly"
      :disabled="disabled"
      :rules="getRules"
      :maxlength="maxLength"
      :mask="mask"
      ref="inputText"
      @click="onClick($event)"
      @blur="onBlur($event)"
      :append-icon="icon"
    )
      template(
        v-if="iconAppend"
        slot="append"
      )
        v-icon(
          @click="iconAppendClick($event)"
        ) {{ iconAppend }}
</template>

<script>
export default {
  name: 'InputText',
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    maxLength: {
      type: [String, Number],
      default: '',
    },
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    required: {
      type: Boolean,
    },
    readonly: {
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
    mask: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    iconAppend: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      rulesDefault: {
        required: this.getRequiredRule(),
      },
      isValidRules: true,
      isFirstInteraction: false,
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
    getRequiredRule() {
      return (v) => {
        if (!this.isFirstInteraction) {
          this.isFirstInteraction = true;
        } else {
          this.isValidRules = !!v;
        }
        return !!v || this.$t('support.components.inputs.required');
      };
    },
    onBlur(value) {
      this.getRules.forEach((func) => {
        const result = func(this.inputValue);
        this.isValidRules = result === true;
      });
      this.$emit('blur', value);
    },
    iconAppendClick() {
      this.$emit('icon-click');
    },
    onClick() {
      this.$emit('click');
    },
  },
};
</script>
