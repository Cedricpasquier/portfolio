import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify';
import VueRouter from 'vue-router';
import Accueil from './components/Accueil'
import VHDL from './components/VHDL'
import VR from './components/VR'
import message from './components/message'
import Embed from 'v-video-embed'

Vue.use(Embed);

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  {path: '/Accueil', component: Accueil},
  {path: '/VHDL', component: VHDL},
  {path: '/VR', component: VR},
  {path: '/Message', component: message}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  vuetify,
  icons: {
    iconfont: 'mdiSvg'
  },
  router
}).$mount('#app')

