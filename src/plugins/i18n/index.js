import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);
// import translation json files
const messages = {};
const locales = {};
var req = require.context("./translations", false, /\.json$/);

req.keys().forEach(filePath => {
    var key = filePath
        .split("/")
        .pop()
        .split(".")[0];
    messages[key] = req(filePath);
    locales[key] = messages[key].$;
});

const i18n = new VueI18n({
    locale: "ar",
    messages
});

i18n.locales = locales;
export default i18n;
