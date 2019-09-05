<template lang="pug">
  v-btn.btn(
    large
    block
    flat
    @click.native="onClick($event)"
  )
    v-icon.grey--text.btn--text.pr-2 {{ icon }}
    span.grey--text.btn--text {{ text }}
</template>

<script>
import BtnTemplate from './BtnTemplate.vue';

export default {
  name: 'BtnFlat',
  extends: BtnTemplate,
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>
