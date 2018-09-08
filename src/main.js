import Vue from 'nativescript-vue';

import HelloWorld from './components/HelloWorld';
import Map from './components/Mapbox';


import './styles.scss';

// Uncomment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;
Vue.registerElement("Mapbox", () => require("nativescript-mapbox").MapboxView)

new Vue({
  render: h => h(Map),
}).$start();
