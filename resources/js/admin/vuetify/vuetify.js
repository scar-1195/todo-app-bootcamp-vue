import Vue from "vue";
import Vuetify from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

Vue.component("vue-icon", {
    template: `<img src="https://w7.pngwing.com/pngs/854/555/png-transparent-vue-js-hd-logo-thumbnail.png">`,
});

const opts = {
    // theme: {
    //     dark: true,
    // },
    icons: {
        iconsFont: "mdi",
        values: {
            vueIcon: {
                component: "vue-icon",
            },
        },
    },
};

export default new Vuetify(opts);
