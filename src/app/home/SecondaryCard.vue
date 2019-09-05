<template lang="pug">
  .secondary-card
    v-hover
      layout-card(
        slot-scope="{ hover }"
        :image="card.image"
        height="55vh"
      )
        v-card-title.justify-center.pa-2
          span.secondary-card--title.text-uppercase {{ card.title }}
        v-card-title.justify-center.pa-2
          span.secondary-card--subtitle.text-uppercase {{ card.subtitle }}
        v-expand-transition
          v-card-title(v-if="hover").justify-center.pa-2
            span.secondary-card--text {{ card.text }}
            v-btn.mt-5(outline color="white") Explore More
</template>

<script>
import LayoutCard from 'App/home/LayoutCard.vue';

export default {
  name: 'SecondaryCard',
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
  .secondary-card
    &--title
      color #FFFFFF;
      font-size 14px
      letter-spacing 2.33px
      line-height 19px
      text-align center
    &--subtitle
      color #FFFFFF
      font-size 28px
      font-weight bold
      line-height 32px
      text-align center
    &--text
      color #FFFFFF
      font-size 16px
      line-height 26px
      text-align center
</style>
