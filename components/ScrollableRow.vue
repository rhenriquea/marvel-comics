<template>
  <div class="scrollableRow" v-if="list">
    <h2>{{ title }}</h2>

    <div class="scrollableRow--arrowleft" @click="handleLeftArrow">&#9664;</div>
    <div class="scrollableRow--arrowright" @click="handleRightArrow">&#x25B6;</div>

    <div class="scrollableRow--listarea">
      <div class="scrollableRow--list" :style="[listStyle]">
        <div class="scrollableRow--item" v-for="item in list" :key="item.id">
          <slot v-bind:item="item"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
    list: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data: () => ({
    scrollX: 0,
  }),
  computed: {
    listStyle() {
      return {
        marginLeft: this.scrollX + 'px',
        width: this.list.length * 150 + 'px',
      };
    },
  },
  methods: {
    handleLeftArrow() {
      const userScreenSize = Math.round(window.innerWidth / 2);
      let roll = this.scrollX + userScreenSize;
      if (roll > 0) {
        roll = 0;
      }
      this.scrollX = roll;
    },
    handleRightArrow() {
      let listWidth = this.list.length * 150;
      const padding = 30;
      const userScreenSize = Math.round(window.innerWidth / 2);
      const remainingSpace = window.innerWidth - listWidth;
      console.log('scrollX', this.scrollX);
      let roll = this.scrollX - userScreenSize;
      if (remainingSpace > roll) {
        roll = remainingSpace - padding * 2;
      }

      this.scrollX = roll;
    },
  },
};
</script>

<style lang="scss">
.scrollableRow {
  margin-bottom: 30px;

  h2 {
    margin: 0 0 0 30px;
  }

  &--listarea {
    overflow-x: hidden;
    padding-left: 30px;
  }

  &--list {
    transition: all ease 0.5s;
  }

  &--item {
    cursor: pointer;
    display: inline-block;
    width: 150px;
    img {
      transform: scale(0.9);
      transition: all ease 0.2s;
      width: 100%;

      &:hover {
        transform: scale(1);
      }
    }
  }

  &--arrowleft,
  &--arrowright {
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    display: flex;
    height: 225px;
    justify-content: center;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    transition: all ease 0.5s;
    width: 40px;
    z-index: 5;

    @media (max-width: 760px) {
      opacity: 1;
    }
  }

  &--arrowleft {
    left: 0;
  }
  &--arrowright {
    right: 0;
  }

  &:hover {
    .scrollableRow--arrowleft,
    .scrollableRow--arrowright {
      opacity: 1;
    }
  }
}
</style>
