import Home from './pages/HomePage'
import Sub from './pages/SubPage'
import Map from './Pages/MapPage'
//import VueRouter from 'vue-router';
const VueRouter = require('vue-router');

export default [
    {path: '/home', component: Home},
    {path: '/sub', component: Sub},
    {path: '/map', component: Map},
    {path: '*', redirect: '/master'}
]