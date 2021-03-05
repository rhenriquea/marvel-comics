<template>
  <article class="event-card">
    <div class="event-card__cover" :style="{ backgroundImage: `url(${imgPath})` }" />

    {{ title }}

    <p>{{ description }}</p>
  </article>
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
