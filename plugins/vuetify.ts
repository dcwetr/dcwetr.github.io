import { createVuetify, type ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
  const wendysTheme: ThemeDefinition = {
    colors: {
      primary: "#009688",
    },
  };

  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: "wendysTheme",
      themes: { wendysTheme },
    },
    defaults: {
      VBtn: {
        color: "primary",
        elevation: 0,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
