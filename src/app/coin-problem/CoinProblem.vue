<template lang="pug">
  .coin
    v-container
      v-text-field(v-model="value" label="Insert value")
      span result {{ coin }}
      br
      span result {{ coinSimple }}
</template>

<script>

export default {
  name: 'CoinProblem',
  data() {
    return {
      value: 2.34,
    };
  },
  computed: {
    coin() {
      return this.calculate(this.value);
    },
    coinSimple() {
      return this.c(this.value);
    },
  },
  methods: {
    calculate(value){
      let actual = value;
      const coins = [];
      const euros = [2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01];
      while (actual > 0) {
        euros.forEach((element) => {
          while (actual >= element) {
            actual -= element;
            actual = actual.toFixed(2);
            coins.push(element);
          }
        });
      }
      return coins;
    },
    // eslint-disable-next-line
    c(v){var c=[];while(v>0){[2,1,.50,.20,.10,.05,.02,.01].forEach(e=>{while(v>=e){v-=e;v=v.toFixed(2);c.push(e)}})}return c},
  },
};
</script>
