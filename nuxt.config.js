export default {
  ssr: "false",
  head: {
    title: "Shortly Landing Page",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "The Shortly Landing Page project from frontendmentor.io"
      }
    ],
    link: [
      { rel: "icon", type: "image/png", href: "favicon.png" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap"
      }
    ]
  },
  loading: { color: "#2ACFCF" },
  css: [],
  plugins: [{ src: "~/plugins/vue-session" }],
  buildModules: ["@nuxtjs/tailwindcss"],
  modules: ["@nuxtjs/sentry", "@nuxtjs/pwa"],
  sentry: {
    dsn: "https://235750b25c4c4e5da45c6e144a111eb5@sentry.io/2766050",
    publishRelease: true,
    attachCommits: true,
    repo: "https://github.com/Asjas/shortly-landing-page"
  },
  pwa: {
    icons: {
      iconSrc: "favicon.png"
    }
  },
  build: {
    extend(config, ctx) {}
  }
};
