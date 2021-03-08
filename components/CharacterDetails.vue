<template>
  <div class="character-details d-flex flex-column flex-sm-row">
    <img class="character-details__image mb-5" :src="imgPath" :alt="name" />

    <div class="character-details__content px-sm-5">
      <h1 class="display-1">{{ name }}</h1>

      <p>{{ description }}</p>

      <v-btn
        class="d-flex d-sm-inline-flex"
        :href="`/details/${id}/comics`"
        nuxt
        color="primary"
        raised
        role="link"
        >Comics</v-btn
      >
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
</style>
