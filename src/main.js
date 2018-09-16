import Vue from 'nativescript-vue';

import VueRouter from 'vue-router';
import routes from './routes';
import axios from 'axios'
import VueAxios from 'vue-axios'

import './styles.scss';

// Uncomment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;
Vue.use(VueRouter, VueAxios, axios)
Vue.registerElement("Mapbox", () => require("nativescript-mapbox").MapboxView)

// console.log にログを出力
Vue.config.silent = false

const router = new VueRouter({
  pageRouting: true,
  routes: routes
});

router.replace('/home');

new Vue({
  router
}).$start();
