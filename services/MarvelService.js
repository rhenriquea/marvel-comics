import * as CryptoJS from 'crypto-js';

export default class MarvelService {
  constructor($axios, $config) {
    this.$axios = $axios;
    this.$config = $config;
  }

  async fetchData(endpoint) {
    const ts = new Date().getTime();
    const publicKey = this.$config.MARVEL_PB_KEY;
    const privateKey = this.$config.MARVEL_PV_KEY;
    const message = `${ts}${privateKey}${publicKey}`;
    const hash = CryptoJS.MD5(message);
    const url = `/v1/public${endpoint}?apikey=${publicKey}&hash=${hash}&ts=${ts}`;
    const { data } = await this.$axios.$get(url);
    return data;
  }
}
