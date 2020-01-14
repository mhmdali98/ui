module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `@import "~@/style/main.scss";`
            }
        }
    },
    chainWebpack: config => {
        ["vue-modules", "vue", "normal-modules", "normal"].forEach(match => {
            config.module
                .rule("sass")
                .oneOf(match)
                .use("sass-loader")
                .tap(opt => Object.assign(opt, { data: `@import '~@/assets/scss/main.scss'` }));
        });
    },
    configureWebpack: {
        plugins: [],
        devtool: "source-map"
    }
};
