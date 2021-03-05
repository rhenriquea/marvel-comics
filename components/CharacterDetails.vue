<template>
  <div class="character-details">
    <h1>{{ name }}</h1>
    <div class="character-details__thumbnail" :style="{ backgroundImage: `url(${imgPath})` }" />

    <p>{{ description }}</p>

    <NuxtLink custom v-slot="{ navigate }" :to="`/details/${id}/comics`">
      <button @click="navigate" role="link">Comics</button>
    </NuxtLink>
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

<style></style>
