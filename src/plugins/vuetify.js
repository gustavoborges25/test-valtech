import Vue from 'vue';
import Vuetify from 'vuetify';
import '@/style/main.styl';
import pt from 'vuetify/es5/locale/pt';

Vue.use(Vuetify, {
  theme: {
    primary: '#208cff',
    secondary: '#363a49',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
  },
  options: {
    customProperties: true,
  },
  iconfont: 'md',
  lang: {
    locales: { pt },
    current: 'pt',
  },
});
