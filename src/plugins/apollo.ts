import "isomorphic-fetch";
import Vue from "vue";
import ApolloSSR from "vue-apollo/ssr";

if (process.server) {
  Vue.use(ApolloSSR);
}

export default {
  async routeResolve({ app, ssr, route, store, error, routeComponents }) {
    if (process.server) {
      try {
        ssr.bodyAdd = `<script>window.__APOLLO_STATE__=${JSON.stringify(
          ApolloSSR.getStates(app.$apolloProvider)
        )}</script>`;
      } catch (err) {
        error(err);
      }
    }
  }
};
