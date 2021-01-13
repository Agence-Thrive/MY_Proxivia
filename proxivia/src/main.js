import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import { sync } from "vuex-router-sync";
import VueMeta from "vue-meta";
import router from "./router";
import store from "./store";
import ApiService from "./services/api.service";
import TokenService from "./services/storage.service";
import filters from "./filters";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/css/style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAlignRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vuesax from "vuesax";
import material from "@/plugins/material.js";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import "vuesax/dist/vuesax.css"; //Vuesax styles
Vue.use(Vuesax, {
    // options here
});

import "./assets/css/index.css";

library.add(faAlignRight);

Vue.config.productionTip = false;

// Set the base URL of the API
ApiService.init(process.env.VUE_APP_ROOT_API);

// If token exists set header
if (TokenService.getToken()) {
    ApiService.setHeader();
}

//Global filters
Vue.use(filters);

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(require("vue-moment"));

Vue.use(VueMeta, {
    // optional pluginOptions
    refreshOnceOnNavigation: true,
});
Vue.component("font-awesome-icon", FontAwesomeIcon);

//Sync vue-router's current $route as part of vuex store's state.
sync(store, router);

new Vue({
    store,
    router,
    material,
    render: (h) => h(App),
}).$mount("#app");
