<template lang="pug">
  v-icon.icon-close(
    large
    color="#e2e3e5"
    @click.native="onClick($event)"
    ) {{ icon }}
</template>

<script>
import BtnTemplate from './BtnTemplate.vue';

export default {
  name: 'BtnClose',
  extends: BtnTemplate,
  props: {
    icon: {
      type: String,
      default: 'close',
    },
  },
};
</script>
