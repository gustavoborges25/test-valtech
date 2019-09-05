<template lang="pug">
  v-btn.btn(
    large
    block
    color="#E2E3E5"
    flat
    @click.native="onClick($event)"
    :disabled="disabled"
  )
    span.grey--text.btn--text {{ text }}
</template>

<script>
import BtnTemplate from './BtnTemplate.vue';

export default {
  name: 'BtnCancel',
  extends: BtnTemplate,
};
</script>
