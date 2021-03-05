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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],

  css: ['~assets/styles.scss'],

  modules: ['@nuxtjs/axios', '@nuxtjs/style-resources'],

  plugins: ['~/plugins/line-clamp.client.js'],

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
