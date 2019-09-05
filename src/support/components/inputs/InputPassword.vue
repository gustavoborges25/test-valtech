<template lang="pug">
  v-text-field.input_password(
    v-model="password"
    :append-icon="show ? 'visibility' : 'visibility_off'"
    :rules="getRules"
    :type="show ? 'text' : 'password'"
    :label="label"
    color="black"
    :required="required"
    @click:append="changeShow($event)"
  )
</template>

<script>
export default {
  name: 'InputPassword',
  props: {
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: 'Password',
    },
    required: {
      type: Boolean,
    },
    rules: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      show: false,
      rulesNative: {
        required: value => !!value || this.$t('support.components.inputs.required'),
      },
    };
  },
  computed: {
    password: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
    getRules() {
      const rules = [];
      if (this.required) rules.push(this.rulesNative.required);
      return rules.concat(this.rules);
    },
  },
  methods: {
    changeShow() {
      this.show = !this.show;
    },
  },
};
</script>
