<template>
  <NuxtLink custom v-slot="{ navigate }" :to="`/details/${id}`">
    <article class="character-card" @click="navigate" role="link">
      <div class="character-card__thumbnail" :style="{ backgroundImage: `url(${imgPath})` }" />

      <div class="character-card__content">
        <h1 class="character-card__title">{{ name }}</h1>

        <div class="character-card__count">
          <chip title="Comics" :count="comics" />
          <chip title="Events" :count="events" />
          <chip title="Series" :count="series" />
          <chip title="Stories" :count="stories" />
        </div>

        <div class="character-card__description">
          <strong>Description:</strong>
          <template v-if="description">
            <p v-line-clamp:20="5">
              {{ description }}
            </p>
          </template>
          <template v-else>
            <p>No description available.</p>
          </template>
        </div>
      </div>
    </article>
  </NuxtLink>
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
  background-color: #fff;
  border: 1px solid #cecece;
  border-radius: 5px;
  box-shadow: 1px 3px 6px #dadada;
  cursor: pointer;
  display: flex;
  padding: 5px;

  &:hover {
    transform: scale(1.05);
  }

  &__thumbnail {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    margin: 15px;
    max-height: 80px;
    min-width: 80px;
  }

  &__title {
    margin: 15px 0 5px;
  }

  &__description {
    height: 100px;
    margin-bottom: 10px;
    p {
      font-size: 14px;
      margin: 0;
    }
  }

  &__count {
    display: flex;

    flex-wrap: wrap;
    margin-bottom: 15px;
  }
}
</style>
