import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify';
import VueRouter from 'vue-router';
import Accueil from './components/Accueil'
import VHDL from './components/VHDL'
import VR from './components/VR'
import message from './components/message'
import Embed from 'v-video-embed'
import WebSite from "@/components/WebSite";

Vue.use(Embed);

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  {path: '/portfolio/Accueil', component: Accueil},
  {path: '/portfolio/VHDL', component: VHDL},
  {path: '/portfolio/Website', component: WebSite},
  {path: '/portfolio/VR', component: VR},
  {path: '/portfolio/Message', component: message},
  // will match everything and put it under `$route.params.pathMatch`
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: Accueil },
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

