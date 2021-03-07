<template>
  <v-chip class="ma-2 chip">
    <span>{{ title }}</span>
    <v-avatar class="chip--count" right> {{ formatCount(count) }}</v-avatar>
  </v-chip>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    count: {
      required: true,
    },
  },
  methods: {
    formatCount(count) {
      let display = null;

      if (count === 0) {
        display = 'N/A';
      } else if (count < 10) {
        display = `0${count}`;
      } else {
        display = count;
      }

      return display;
    },
  },
};
</script>

<style lang="scss" scoped>
.chip {
  background: #de3a3a !important;
  color: #fff;
  font-size: 12px;

  &--count {
    background-color: #a20808;
    font-size: 10px;
    font-weight: bold;
    margin-left: 15px;
  }
}
</style>
