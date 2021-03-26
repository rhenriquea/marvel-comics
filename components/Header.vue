<template>
  <header :class="{ scrolled }">
    <div class="header--logo">
      <nuxt-link to="/">
        <img src="/logo.png" alt="Netflix_Logo" />
      </nuxt-link>
    </div>
  </header>
</template>
>

<script>
export default {
  props: {
    scrolled: false,
  },
};
</script>

<style lang="scss">
header {
  align-items: center;
  background: transparent;
  display: flex;
  height: 70px;
  justify-content: space-between;
  left: 0;
  padding: 0 30px;
  position: fixed;
  right: 0;
  top: 0;
  transition: all ease 0.2s;
  z-index: 9999;
}

header.scrolled {
  background: #141414;
}

.header--logo {
  height: 50px;
  &::after {
    background-color: #1e90ff;
    content: 'API';
    display: flex;
    font-weight: bolder;
    justify-content: center;
    left: 8em;
    padding: 0 23px;
    position: absolute;
    top: 12px;
    transform: rotate(30deg);
    width: 35px;
  }
}

.header--logo img {
  height: 100%;
}

.header--user {
  border-radius: 3px;
  height: 35px;
}

.header--user img {
  height: 100%;
}
</style>
