<template>
  <div class="character-details">
    <img class="character-details__image" :src="imgPath" :alt="name" />

    <div class="character-details__content">
      <h1 class="display-1">{{ name }}</h1>

      <p>{{ description }}</p>

      <NuxtLink custom v-slot="{ navigate }" :to="`/details/${id}/comics`">
        <v-btn color="primary" raised @click="navigate" role="link">Comics</v-btn>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
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
  },
};
</script>

<style lang="scss" scoped>
.md-button {
  margin: 0;
}
.character-details {
  display: flex;

  &__content {
    padding: 15px;
  }
}
</style>
