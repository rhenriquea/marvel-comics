<template>
  <v-card class="character-card">
    <v-img :src="imgPath" :alt="name" />
    <v-card-title class="text-truncate" v-line-clamp:5="1">{{ name }}</v-card-title>

    <v-card-text class="character-card__content">
      <template v-if="description">
        <p v-line-clamp:20="5">
          {{ description }}
        </p>
      </template>
      <template v-else>
        <p>No description available.</p>
      </template>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <v-chip-group column>
        <chip title="Comics" :count="comics" />
        <chip title="Events" :count="events" />
        <chip title="Series" :count="series" />
        <chip title="Stories" :count="stories" />
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn :href="`/details/${id}`" nuxt color="primary" text role="link">Learn More</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Chip from '@/components/Chip';

export default {
  components: {
    Chip,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
      default: '',
    },
    description: {
      type: String,
      required: true,
      default: '',
    },
    imgPath: {
      type: String,
      required: true,
      default: '',
    },
    comics: {
      type: Number,
      required: false,
    },
    events: {
      type: Number,
      required: false,
    },
    series: {
      type: Number,
      required: false,
    },
    stories: {
      type: Number,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.character-card {
  &__count {
    display: flex;

    flex-wrap: wrap;
    margin-bottom: 15px;
  }
  &__content {
    height: 120px;
  }
}
</style>
