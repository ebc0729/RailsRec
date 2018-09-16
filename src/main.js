import Vue from 'nativescript-vue';

import VueRouter from 'vue-router';
import routes from './routes';

import './styles.scss';

// Uncomment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;
Vue.use(VueRouter)
Vue.registerElement("Mapbox", () => require("nativescript-mapbox").MapboxView)

const router = new VueRouter({
  pageRouting: true,
  routes: routes
});

router.replace('/home');

new Vue({
  router
}).$start();
