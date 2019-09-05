<template lang="pug">
  .home
    v-container
      v-layout(row wrap)
        v-flex.pa-3(xs12)
          main-card(:card="mainCard")
        v-flex.pa-3(
          v-for="(card, index) in cards"
          :class="getClass(index)"
        )
          secondary-card(:card="card")
</template>

<script>
import MainCard from 'App/home/MainCard.vue';
import SecondaryCard from 'App/home/SecondaryCard.vue';
import Lagoa from 'Assets/Front/Lagoa.jpg';
import Venice from 'Assets/Front/Venice.jpg';
import Berlin from 'Assets/Front/Berlin.jpg';
import Barcelona from 'Assets/Front/Barcelona.jpg';
import Paris from 'Assets/Front/Paris.jpg';
import Amsterdam from 'Assets/Front/Amsterdam.jpg';
import London from 'Assets/Front/London.jpg';

export default {
  name: 'Home',
  components: {
    MainCard,
    SecondaryCard,
  },
  data() {
    return {
      mainCard: {
        image: Lagoa,
        title: 'Front-End',
        subtitle: 'valtech_',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
      },
      cards: [
        {
          image: Venice,
          title: 'Italy',
          subtitle: 'Venice',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
        },
        {
          image: Berlin,
          title: 'Germany',
          subtitle: 'Berlin',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
        },
        {
          image: Barcelona,
          title: 'Spain',
          subtitle: 'Barcelona',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
        },
        {
          image: Paris,
          title: 'France',
          subtitle: 'Paris',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
        },
        {
          image: Amsterdam,
          title: 'Netherlands',
          subtitle: 'Amsterdam',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
        },
        {
          image: London,
          title: 'United Kingdom',
          subtitle: 'London',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
        },
      ],
    };
  },
  methods: {
    getClass(index) {
      return (index === 0 || index === 5) ? 'xs12 lg6' : 'xs12 lg3';
    },
  },
};
</script>
