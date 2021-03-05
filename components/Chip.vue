<template>
  <div class="chip">
    <span>{{ title }}</span>
    <span>{{ formatCount(count) }}</span>
  </div>
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
  align-items: center;
  background: #de3a3a;
  border-radius: 15px;
  color: #fff;
  display: flex;
  font-size: 12px;
  height: 32px;
  margin-right: 10px;
  margin-top: 5px;
  padding: 0 10px;

  &:last-child {
    margin-left: 0;
  }

  span {
    &:first-child {
      font-weight: 100;
    }
    &:last-child {
      background-color: #a20808;
      border-radius: 50%;
      font-size: 10px;
      font-weight: bold;
      margin-left: 5px;
      padding: 5px;
    }
  }
}
</style>
