import VueRouter from "vue-router";
import home from "./home.vue";
import contact from "./contact.vue";
import cart from "./cart.vue";
import search from "./search.vue";
var routers = new VueRouter({
    routes:[
        {path:"/",redirect:"/home"},
        {path:"/home",component:home},
        {path:"/contact",component:contact},
        {path:"/cart",component:cart},
        {path:"/search",component:search},
    ],
    linkActiveClass:'mui-active'
})
export default routers