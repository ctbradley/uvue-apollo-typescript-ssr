import { KoaAdapter } from "@uvue/server";

export default {
  adapter: KoaAdapter,
  plugins: ["@uvue/core/plugins/errorHandler"]
};
