export default {
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
        rel: 'stylesheet',
      },
      {
        href: 'https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css',
        rel: 'stylesheet',
      },
      { href: 'https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css', rel: 'stylesheet' },
    ],
  },

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module', '@nuxtjs/vuetify'],

  vuetify: {
    theme: {
      themes: {
        light: {
          primary: '#de3a3a',
          secondary: '#b0bec5',
          accent: '#8c9eff',
          error: '#b71c1c',
        },
      },
    },
  },

  css: ['~assets/styles.scss'],

  plugins: ['~/plugins/line-clamp.client.js', '~/plugins/axios.js'],

  modules: ['@nuxtjs/axios', '@nuxtjs/style-resources'],

  axios: {
    proxy: true,
  },

  proxy: {
    debug: true,
    '/v1/public/': 'https://gateway.marvel.com',
  },

  publicRuntimeConfig: {
    MARVEL_PV_KEY: process.env.MARVEL_PV_KEY,
    MARVEL_PB_KEY: process.env.MARVEL_PB_KEY,
  },

  privateRuntimeConfig: {
    MARVEL_PV_KEY: process.env.MARVEL_PV_KEY,
    MARVEL_PB_KEY: process.env.MARVEL_PB_KEY,
  },
};
