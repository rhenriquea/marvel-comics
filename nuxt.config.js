export default {
  target: 'static',

  head: {
    title: 'WDD330: Final Challenge',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module', '@nuxtjs/vuetify'],

  vuetify: {
    theme: {
      themes: {
        light: {
          primary: '#de3a3a',
          secondary: '#3f51b5',
          accent: '#8c9eff',
          error: '#b71c1c',
        },
      },
    },
  },

  plugins: ['~/plugins/line-clamp.client.js', '~/plugins/axios.js'],

  modules: ['@nuxtjs/axios'],

  axios: {
    baseURL: 'https://gateway.marvel.com',
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
