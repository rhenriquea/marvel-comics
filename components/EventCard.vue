<template>
  <v-card>
    <v-img
      :src="imgPath"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="200px"
    >
      <v-card-title v-text="title"></v-card-title>
    </v-img>
    <v-card-subtitle>
      <p>{{ description }}</p>
    </v-card-subtitle>
  </v-card>
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
