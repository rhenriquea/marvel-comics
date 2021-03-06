<template>
  <div class="home px-5">
    <section class="search d-flex flex-column mb-5 flex-sm-row mr-sm-12 align-sm-baseline">
      <v-text-field
        v-model="search"
        @click:clear="clearSearch"
        clearable
        label="Search character by name"
        type="text"
        @keydown.enter="searchByName"
      >
      </v-text-field>
      <v-btn raised color="primary" class="ml-sm-5" @click="searchByName">
        <v-icon left> mdi-account-search </v-icon>Search
      </v-btn>
    </section>
    <section>
      <div class="loading" v-if="loading">
        <v-progress-circular :size="70" :width="7" indeterminate></v-progress-circular>
      </div>
      <v-row v-if="characters && characters.length && !loading">
        <v-col cols="12" xs="12" sm="4" md="3" v-for="character of characters" :key="character.id">
          <character-card
            :id="character.id"
            :name="character.name"
            :description="character.description"
            :img-path="`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`"
            :comics="character.comics.available"
            :events="character.events.available"
            :series="character.series.available"
            :stories="character.stories.available"
          />
        </v-col>
      </v-row>
      <div v-else-if="!loading && characters.length === 0" class="text-center">
        <p>No characters found.</p>
      </div>
      <div class="d-flex flex-column align-center">
        <v-pagination
          circle
          v-model="page"
          class="my-4"
          @input="onPageChange"
          :length="pagination"
          :total-visible="7"
        ></v-pagination>

        <small> {{ results }} of {{ total }}</small>
      </div>
    </section>
  </div>
</template>

<script>
import MarvelService from '@/services/MarvelService';
import CharacterCard from '@/components/CharacterCard';
import { mapGetters } from 'vuex';

export default {
  components: {
    CharacterCard,
  },
  data: () => ({
    page: 1,
    search: '',
  }),
  async asyncData({ $axios, $config }) {
    const data = await new MarvelService($axios, $config).fetchData('/characters');
    const { offset, limit, total, count, results } = data;
    return { offset, limit, total, count, characters: results };
  },
  computed: {
    ...mapGetters(['loading']),
    pagination() {
      const itemsPerPage = this.limit;
      const pages = Math.ceil(this.total / itemsPerPage);
      return pages;
    },
    results() {
      return this.page * this.limit;
    },
  },
  methods: {
    async onPageChange() {
      const data = await new MarvelService(this.$axios, this.$config).fetchData(
        '/characters',
        `&offset=${this.results}`
      );
      const { results } = data;
      this.characters = results;
    },
    async searchByName() {
      if (!this.search) {
        return;
      }
      const data = await new MarvelService(this.$axios, this.$config).fetchData(
        '/characters',
        `&nameStartsWith=${this.search}`
      );
      const { results } = data;
      this.characters = results;
    },
    async clearSearch() {
      const data = await new MarvelService(this.$axios, this.$config).fetchData('/characters');
      const { results } = data;
      this.characters = results;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin-top: 70px;
  padding: 15px;
}

.search {
  max-width: 600px;
}

.loading {
  margin-bottom: 15px;
  text-align: center;
}
</style>
