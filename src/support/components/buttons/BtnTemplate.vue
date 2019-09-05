<template lang="pug">
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
    },
    loading: {
      type: Boolean,
    },
    type: {
      type: String,
      default: 'button',
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>
