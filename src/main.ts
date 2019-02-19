import "@uvue/core/vueclass";
import Vue from "vue";
import App from "./App.vue";
import createRouter from "./router";
import { createProvider } from "./vue-apollo";

Vue.config.productionTip = false;

export default () => {
  const router = createRouter();
  return new Vue({
    router,
    apolloProvider: createProvider(),
    render: h => h(App)
  });
};
