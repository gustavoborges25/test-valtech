<template lang="pug">
  v-btn(
    flat
    :color="color"
    @click.native="onClick($event)"
  )
    v-icon(left v-if="icon") {{ icon }}
    span {{ text }}
</template>

<script>
export default {
  name: 'BtnAction',
  props: {
    icon: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'lightgrey',
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>
