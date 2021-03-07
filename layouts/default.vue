<template>
  <v-app>
    <Header />
    <v-main class="container bg-white">
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
};
</script>
