<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
    </template>

    <v-img height="250" :src="imgPath"></v-img>

    <v-card-title>{{ title }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-col>
          <v-list dense>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Pages</v-list-item-title>
                <v-list-item-subtitle>{{ pages }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line v-for="price of prices">
              <v-list-item-content>
                <v-list-item-title>{{
                  price.type === 'printPrice' ? 'Print: ' : 'Digital: '
                }}</v-list-item-title>
                <v-list-item-subtitle>
                  <v-chip class="ma-2 white--text" x-small color="green">
                    ${{ price.price }}
                  </v-chip></v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col class="col-12 col-md-3">
          <v-list dense>
            <v-subheader>Creators</v-subheader>
            <v-list-item two-line v-for="creator of creators" :key="creator.id">
              <v-list-item-content>
                <v-list-item-title>{{ creator.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ creator.role }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>

      <div v-if="description">
        <strong>Description</strong>
        <p v-html="description"></p>
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Characters</v-card-title>

    <v-card-text>
      <v-chip-group column>
        <v-chip small label class="ma-2" v-for="character of characters" :key="character.id">
          <span>{{ character.name }}</span>
        </v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="reserve"> Reserve </v-btn>
    </v-card-actions>
  </v-card>
  <!--   <v-card class="mb-4">
    <v-card-title>{{ title }}</v-card-title>

    <v-row class="justify-space-between">
      <v-col class="col-12 col-md-3">
        <div class="d-flex">
          <v-img :src="imgPath" :alt="title" class="ml-4" />
          <div class="ml-3">
            <v-list dense>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>Pages</v-list-item-title>
                  <v-list-item-subtitle>{{ pages }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item two-line v-for="price of prices">
                <v-list-item-content>
                  <v-list-item-title>{{
                    price.type === 'printPrice' ? 'Print: ' : 'Digital: '
                  }}</v-list-item-title>
                  <v-list-item-subtitle>
                    <v-chip class="ma-2 white--text" x-small color="green">
                      ${{ price.price }}
                    </v-chip></v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>
        </div>
      </v-col>
      <v-col class="col-12 col-md-3">
        <div>
          <v-subheader>Characters</v-subheader>

          <v-chip-group column>
            <v-chip small label class="ma-2" v-for="character of characters" :key="character.id">
              <span>{{ character.name }}</span>
            </v-chip>
          </v-chip-group>
        </div>
      </v-col>

      <v-col class="col-12 col-md-3">
        <v-list dense>
          <v-subheader>Creators</v-subheader>
          <v-list-item two-line v-for="creator of creators" :key="creator.id">
            <v-list-item-content>
              <v-list-item-title>{{ creator.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ creator.role }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>

    <v-card-text v-if="description">
      <strong>Description:</strong>
      <p v-html="description"></p>
    </v-card-text>
  </v-card> -->
</template>

<script>
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
};
</script>

<style lang="scss" scoped>
ul,
p {
  margin: 0 !important;
  padding: 0 !important;
}
</style>
