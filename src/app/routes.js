
export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('App/home/Home.vue'),
  },
  {
    path: '/coin',
    name: 'CoinProblem',
    component: () => import('App/coin-problem/CoinProblem.vue'),
  },
];
