<template>
  <div>
    <section
      class="featured"
      :style="{
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        backgroundImage: `url(${imgPath})`,
      }"
    >
      <div class="featured--horizontal-transparency">
        <div class="featured--vertical-transparency">
          <h1 class="mt-16 mt-sm-8 featured--title display-2 font-weight-bold">{{ name }}</h1>
          <div class="featured--info">
            <div class="deep-orange--text">Participated in {{ stories.available }} stories.</div>
          </div>
          <div class="featured--description body-1">{{ description }}</div>
          <div class="featured--buttons">
            <v-btn href="/" outlined nuxt color="white" class="mr-2" role="link">
              &larr; Back</v-btn
            >
            <v-btn :href="`/details/${id}/comics`" nuxt color="primary" raised role="link"
              >See Comics</v-btn
            >
          </div>
          <div class="featured--comics" v-if="comics.available > 0">
            <strong>Comics:</strong>
            <span class="caption" v-for="(comic, index) of comics.items">
              {{ comic.name }}<span v-if="index !== comics.items.length - 1">,</span>
            </span>
          </div>
        </div>
      </div>
    </section>
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
    comics: {
      type: Object,
      required: false,
    },
    stories: {
      type: Object,
      required: false,
    },
    events: {
      type: Object,
      required: false,
    },
  },
};
</script>

<style lang="scss">
.featured {
  height: 500px;
}

.featured--horizontal-transparency {
  background: linear-gradient(to top, #111 10%, transparent 90%);
  height: inherit;
  width: inherit;
}

.featured--vertical-transparency {
  background: linear-gradient(to right, #111 30%, transparent 70%);
  display: flex;
  flex-direction: column;
  height: inherit;
  justify-content: center;
  padding-bottom: 100px;
  padding-left: 30px;
  padding-top: 70px;
  width: inherit;
}

.featured--title {
  font-weight: bold;
}

.featured--info {
  font-weight: bold;
  margin-top: 15px;
}

.featured--stories,
.featured--year,
.featured--events {
  display: inline-block;
  margin-right: 15px;
}

.featured--description {
  color: #999;
  margin-top: 15px;
  max-width: 40%;
}

.featured--buttons {
  margin-top: 15px;
}

.featured--comics {
  color: #999;
  margin-top: 15px;
}
</style>
