<template>
  <v-card :loading="loading" class="mx-auto my-12">
    <template slot="progress">
      <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
    </template>

    <v-img height="250" :src="imgPath"></v-img>

    <v-card-title v-line-clamp:20="1">{{ title }}</v-card-title>

    <v-card-text>
      <v-row class="mb-1">
        <v-col>
          <div class="d-flex flex-column align-center">
            <strong>Pages:</strong>
            <span v-if="pages > 0" class="info--text" small color="secondary">
              {{ pages }}
            </span>
            <span v-else class="red--text" small color="secondary"> Unknown </span>
          </div>
        </v-col>

        <v-col>
          <div class="d-flex flex-column align-center">
            <strong>Print:</strong>
            <span v-if="prices[0]" class="green--text" small color="green">
              ${{ prices[0].price }}
            </span>
            <span v-else class="red--text"> Unavailable </span>
          </div>
        </v-col>

        <v-col>
          <div class="d-flex flex-column align-center">
            <strong>Digital</strong>
            <span v-if="prices[1]" class="green--text" small color="green">
              ${{ prices[1].price }}
            </span>
            <span v-else small class="red--text"> Unavailable </span>
          </div>
        </v-col>
      </v-row>

      <v-divider class="mb-5"></v-divider>

      <v-expansion-panels>
        <v-expansion-panel v-if="description">
          <v-expansion-panel-header> Description </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p v-html="description"></p>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header> Creators </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list dense>
              <v-list-item two-line v-for="creator of creators.slice(0, 5)" :key="creator.id">
                <v-list-item-content>
                  <v-list-item-title>{{ creator.name }}</v-list-item-title>
                  <v-list-item-subtitle class="text-capitalize">{{
                    creator.role
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-subheader v-if="creators.length > 5"
                >{{ creators.length - 5 }} More...</v-subheader
              >
            </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header> Characters </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-chip-group column>
              <v-chip
                small
                label
                class="ma-2"
                v-for="character of characters"
                :key="character.id"
                @click="getCharacterId(character.name)"
              >
                <span>{{ character.name }}</span>
              </v-chip>
            </v-chip-group>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
  </v-card>
</template>

<script>
import MarvelService from '@/services/MarvelService';
import { mapGetters } from 'vuex';

export default {
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
    description: {
      required: true,
      default: '',
    },
    imgPath: {
      type: String,
      required: true,
      default: '',
    },
    pages: {
      type: Number,
      required: true,
    },
    prices: {
      type: Array,
      required: true,
    },
    characters: {
      type: Array,
      required: true,
    },
    creators: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['loading']),
  },
  methods: {
    async getCharacterId(name) {
      const data = await new MarvelService(this.$axios, this.$config).fetchData(
        '/characters',
        `&nameStartsWith=${name}`
      );

      const characterId = data.results[0].id;
      this.$router.push(`/details/${characterId}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.v-card__title {
  height: 80px;
  line-height: 50px;
}

ul,
p {
  margin: 0 !important;
  padding: 0 !important;
}
</style>
