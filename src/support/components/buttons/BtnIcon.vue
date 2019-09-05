<template lang="pug">
  v-btn.btn(
    color="primary"
    large
    block
    @click.native="onClick($event)"
  )
    v-icon.white--text {{ text }}
</template>

<script>
import BtnTemplate from './BtnTemplate.vue';

export default {
  name: 'BtnIcon',
  extends: BtnTemplate,
};
</script>
