<template lang="pug">
  .input_email
    v-text-field(
      v-model="email"
      :label="label"
      :required="required"
      :rules="rules"
      :append-icon="icon"
      @update:error="onError($event)"
      :placeholder="placeholder"
      :readonly="readonly"
    )
</template>

<script>
export default {
  name: 'InputEmail',
  props: {
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: 'E-mail',
    },
    required: {
      type: Boolean,
    },
    placeholder: {
      type: String,
      default: '',
    },
    readonly: {
      type: Boolean,
    },
  },
  data() {
    return {
      isValid: true,
      rules: [
        value => !!value || this.$t('support.components.inputs.required'),
        (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || this.$t('support.components.inputs.email.invalid');
        },
      ],
    };
  },
  computed: {
    email: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
    icon() {
      if (!this.email) return '';
      return this.isValid ? 'warning' : 'check';
    },
  },
  methods: {
    onError(value) {
      this.isValid = value;
    },
  },
};
</script>
