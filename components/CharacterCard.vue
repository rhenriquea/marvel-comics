<template>
  <div class="card">
    <div class="avatar--cover" :style="imgCover">
      <img class="avatar--thumbnail" :src="imgPath" alt="avatar" />
      <h3 class="card--title" v-line-clamp:5="1">{{ name }}</h3>
      <p class="card--description" v-line-clamp:20="5">
        {{ description || 'No description available' }}
      </p>
      <section class="stats">
        <div class="stats--info">
          <h4>{{ comics }}</h4>
          <small>Comics</small>
        </div>
        <div class="stats--info">
          <h4>{{ events }}</h4>
          <small>Events</small>
        </div>
        <div class="stats--info">
          <h4>{{ series }}</h4>
          <small>Series</small>
        </div>
        <div class="stats--info">
          <h4>{{ stories }}</h4>
          <small>Stories</small>
        </div>
      </section>
      <router-link :to="`/details/${id}`" custom v-slot="{ navigate }">
        <button @click="navigate" role="link">Details</button>
      </router-link>
    </div>
  </div>
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
  computed: {
    imgCover() {
      return {
        backgroundImage:
          'linear-gradient(180deg,rgba(185, 180, 180, 0.55) 15%,rgba(29, 30, 39, 1) 95%),url(' +
          this.imgPath +
          ')',
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  color: #fff;
  font-family: 'Lexend', sans-serif;
  font-weight: 300;
  height: auto;
  margin: 0 auto;
  max-width: 411px;
  text-align: center;

  &--title {
    font-weight: 400;
    margin: 0;
    margin-bottom: 5px;
    padding: 0 30px;
    text-transform: uppercase;
  }

  &--description {
    font-size: 14px;
    -webkit-line-clamp: 5;
    line-height: 1.2em;
    margin: 0;
    min-height: 80px;
    overflow: hidden;
    padding: 0 30px;
    text-overflow: ellipsis;
  }

  .avatar {
    &--cover {
      background-position: center;
      background-size: cover;
      border-radius: 20px;
    }

    &--thumbnail {
      border-radius: 50%;
      box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.25);
      height: 150px;
      margin: 15px 0;
    }
  }

  button {
    background: rgb(255, 140, 85);
    background: linear-gradient(
      340deg,
      rgba(255, 140, 85, 1) 0%,
      rgba(255, 45, 70, 1) 50%,
      rgba(167, 20, 88, 1) 100%
    );
    border: 0;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 30px;
    outline: none;
    padding: 15px 45px;
    text-transform: uppercase;
  }

  .stats {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 30px;

    &--info {
      h4,
      p {
        margin: 0;
        padding: 0;
      }

      h4 {
        font-size: 20px;
        font-weight: 500;
      }
    }
  }
}
</style>
