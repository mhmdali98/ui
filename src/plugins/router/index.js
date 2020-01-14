import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "../store";
import i18n from "../i18n";
Vue.use(VueRouter);
const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "",
            redirect: to => {
                return `${store.state.locale || window.localStorage.locale || i18n.locale}`;
            }
        },
        {
            path: "/:lang",
            component: {
                render(c) {
                    return c("router-view");
                }
            },
            children: routes,
            beforeEnter: (to, from, next) => {
                console.log(to);
                var lang = to.params.lang;
                if (!Object.keys(i18n.locales).includes(lang)) {
                    next(`${store.state.locale || window.localStorage.locale || i18n.locale}${to.path}`);
                }
                if (!store.state.locale || store.state.locale != lang) {
                    store.commit("setLocale", lang);
                }
                next();
            }
        }
    ]
});
export default router;
