<template lang="pug">
  v-btn.btn(
    color="primary"
    large
    block
    :disabled="disabled"
    @click.native="onClick($event)"
    :loading="loading"
    :type="type"
  )
    span.white--text.btn--text {{ text }}
</template>

<script>
import BtnTemplate from './BtnTemplate.vue';

export default {
  name: 'BtnOk',
  extends: BtnTemplate,
};
</script>
