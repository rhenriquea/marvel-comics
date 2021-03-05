<template>
  <div class="home">
    <section class="search">
      <label
        for="search
      "
        >Search
        <input
          id="search"
          type="text"
          placeholder="Enter the name of your character"
          aria-label="search"
        />
      </label>
      <button>Search</button>
    </section>
    <section>
      <div class="grid" v-if="characters && characters.length">
        <character-card
          v-for="character of characters"
          :key="character.id"
          :id="character.id"
          :name="character.name"
          :description="character.description"
          :img-path="`${character.thumbnail.path}/standard_medium.${character.thumbnail.extension}`"
          :comics="character.comics.available"
          :events="character.events.available"
          :series="character.series.available"
          :stories="character.stories.available"
        />
      </div>
    </section>
  </div>
</template>

<script>
import MarvelService from '@/services/MarvelService';
import CharacterCard from '@/components/CharacterCard';

export default {
  components: {
    CharacterCard,
  },
  data: () => ({
    page: 1,
  }),
  async asyncData({ $axios, $config }) {
    const data = await new MarvelService($axios, $config).fetchData('/characters');
    const { offset, limit, total, count, results } = data;
    return { offset, limit, total, count, characters: results };
  },
  computed: {
    pagination() {
      const itemsPerPage = this.limit;
      const pages = Math.ceil(this.total / itemsPerPage);
      return pages;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding: 15px;
}

section {
  &.search {
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    margin: 0 auto;
    max-width: 500px;
    padding: 15px;

    h2 {
      margin-right: 5px;
    }

    label {
      width: 100%;
    }
  }
}
</style>
