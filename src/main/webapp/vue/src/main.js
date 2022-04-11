import {createApp} from "vue";
import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import router from "./router/index";
import App from "./App.vue";

const vueApp = createApp(App);

vueApp.use(router);
vueApp.use(BootstrapVue3);

vueApp.mount("#app");
