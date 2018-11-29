import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import app from "./content.vue";

import "./lib/mui/css/mui.css";
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
import "./css/index.css";
import { Tabbar, TabItem } from 'mint-ui';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
let vm = new Vue({
    data: {

    },
    render: c => c(app)
}).$mount("#app")