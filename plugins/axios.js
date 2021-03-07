export default function ({ $axios, store }) {
  $axios.onRequest(_ => {
    store.commit('setLoading', true);
  });
  $axios.onResponse(_ => {
    store.commit('setLoading', false);
  });
}
