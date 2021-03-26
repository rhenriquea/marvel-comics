<template>
  <v-app>
    <Header :scrolled="scrolled" />
    <v-main>
      <nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default {
  components: {
    Header,
    Footer,
  },
  mounted() {
    window.addEventListener('scroll', this.scrollListener);
  },
  data: () => ({
    scrolled: false,
  }),
  methods: {
    scrollListener() {
      this.scrolled = window.scrollY > 10;
    },
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollListener);
  },
};
</script>

<style lang="scss">
.theme--light.v-application {
  background: #373841;
}
</style>
