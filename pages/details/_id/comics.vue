<template>
  <div class="px-5 comics-page">
    <v-btn
      :href="`/details/${params.id}`"
      :loading="loading"
      nuxt
      text
      color="accent"
      class="my-2"
      role="link"
    >
      &larr; Back</v-btn
    >

    <v-divider></v-divider>

    <h2 class="display-1 font-weight-bold">Comics</h2>

    <v-row>
      <v-col xs="12" sm="4" md="3" v-for="comic of comics" :key="comic.id">
        <comic-details
          :title="comic.title"
          :description="comic.description"
          :imgPath="`${comic.thumbnail.path}/standard_fantastic.${comic.thumbnail.extension}`"
          :pages="comic.pageCount"
          :prices="comic.prices"
          :characters="comic.characters.items"
          :creators="comic.creators.items"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MarvelService from '@/services/MarvelService';
import ComicDetails from '@/components/ComicDetails';
import { mapGetters } from 'vuex';

export default {
  components: {
    ComicDetails,
  },
  async asyncData({ $axios, params, $config }) {
    const data = await new MarvelService($axios, $config).fetchData(
      `/characters/${params.id}/comics`
    );
    const { results } = data;
    return { comics: results, params };
  },
  computed: {
    ...mapGetters(['loading']),
  },
};
</script>

<style lang="scss" scoped>
.comics-page {
  margin-top: 70px;
  ul {
    list-style: none;
    margin: 0;
    padding: 0 !important;
  }
}
</style>
