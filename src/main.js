import Vue from "vue";

//import global components
import "@/components";

// import plugins
import { store, router, i18n } from "./plugins";

// --

import "./style/style.scss";

Vue.config.productionTip = false;
new Vue({
    store,
    router,
    i18n,

    render: h => h("router-view")
}).$mount("#app");
