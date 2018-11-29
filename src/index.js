import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import app from "./content.vue";

import "./lib/mui/css/mui.css";

import "font-awesome/css/font-awesome.css";

import { Header } from 'mint-ui';

Vue.component(Header.name, Header);

import "./css/index.css";

import { Tabbar, TabItem } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

import router from "./router.js";

import VueResource from "vue-resource";
Vue.use(VueResource)

let vm = new Vue({
    data: {

    },
    render: c => c(app),
    router
}).$mount("#app")