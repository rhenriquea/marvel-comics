<template>
  <div class="comic-details">
    <h3>{{ title }}</h3>
    <img :src="imgPath" :alt="title" />

    <div>
      <strong>Description:</strong>
      <p>{{ description }}</p>
    </div>

    <div>
      <strong>Pages:</strong><span> {{ pages }}</span>
    </div>

    <ul>
      <li v-for="price of prices">
        <strong>{{ price.type }}</strong>
        <span>{{ price.price }}</span>
      </li>
    </ul>

    <div>
      <h3>Characters</h3>
      <ul>
        <li v-for="character of characters">
          {{ character.name }}
        </li>
      </ul>
    </div>

    <div>
      <h3>Creators:</h3>
      <ul>
        <li v-for="creator of creators">
          <p>{{ creator.name }}</p>
          <small>{{ creator.role }}</small>
        </li>
      </ul>
    </div>
  </div>
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

<style></style>
