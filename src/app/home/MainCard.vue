<template lang="pug">
  .main-card
    layout-card(
      :image="card.image"
      height="75vh"
    )
      v-card-title.justify-center.pa-2
        span.main-card--title.text-uppercase {{ card.title }}
      v-card-title.justify-center.pa-2
        span.main-card--subtitle {{ card.subtitle }}
      v-card-title.justify-center.pa-2.card--text-width
        span.main-card--text {{ card.text }}
</template>

<script>
import LayoutCard from 'App/home/LayoutCard.vue';

export default {
  name: 'MainCard',
  components: {
    LayoutCard,
  },
  props: {
    card: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="stylus">
  .main-card
    &--title
      color #FFFFFF;
      font-size 14px
      letter-spacing 2.33px
      line-height 19px
      text-align center
    &--subtitle
      color #FFFFFF
      font-size 48px
      font-weight bold
      line-height 45px
      text-align center
    &--text
      color #FFFFFF
      font-size 16px
      line-height 26px
      text-align center
      width 75vh
</style>
