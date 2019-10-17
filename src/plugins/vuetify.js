import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import fr from 'vuetify/es5/locale/fr';

Vue.use(Vuetify);

Vue.component('../components/Calendar.vue', {
  methods: {
    changeLocale() {
      this.$vuetify.lang.current = 'fr';
    }
  }
});

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  lang: {
    locales: { fr },
    current: 'fr'
  }
});
