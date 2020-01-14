import Vue from "vue";
import Vuex from "vuex";
import i18n from "../i18n";

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        locale: null,
        navbar_toggle: true,
        breadItems: [
            {
                text: "الرئيسية",
                to: { name: "Home" }
            }
        ]
    },
    getters: {},
    mutations: {
        setLocale(state, code) {
            if (!Object.keys(i18n.locales).includes(code)) {
                throw "invalid code";
            }
            i18n.locale = code;
            state.locale = code;
            window.localStorage.locale = code;
            document.title = i18n.locales[code].title;
            document.documentElement.lang = i18n.locales[code].code;
            document.dir = i18n.locales[code].dir;
        },
        navbarToggle(state) {
            state.navbar_toggle = !state.navbar_toggle;
        },
        setBreadItems(state, items) {
            state.breadItems = items;
        }
    },
    actions: {}
});
export default store;
