<template lang="pug">
  .layout-card
    v-card.layout-card--border
      v-img(
        :height="height"
        :src="image"
      )
        v-layout(
          align-center
          justify-center
          column
          fill-height
        )
          slot
</template>

<script>
export default {
  name: 'LayoutCard',
  props: {
    image: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '',
    },
  },
};
</script>
<style lang="stylus">
  .layout-card
    &--border
      border-radius 8px
</style>
