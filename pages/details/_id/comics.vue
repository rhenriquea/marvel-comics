<template>
  <div>
    <h2>Comics</h2>
    <ul>
      <li v-for="comic of comics">
        <comic-details
          :title="comic.title"
          :description="comic.description"
          :imgPath="`${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`"
          :pages="comic.pageCount"
          :prices="comic.prices"
          :characters="comic.characters.items"
          :creators="comic.creators.items"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import MarvelService from '@/services/MarvelService';
import ComicDetails from '@/components/ComicDetails';

export default {
  components: {
    ComicDetails,
  },
  async asyncData({ $axios, params, $config }) {
    const data = await new MarvelService($axios, $config).fetchData(
      `/characters/${params.id}/comics`
    );
    const { results } = data;
    return { comics: results };
  },
};
</script>

<style></style>
