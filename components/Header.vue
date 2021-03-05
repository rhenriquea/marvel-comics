<template>
  <header>
    <div>
      <h1 class="container">Marvel Characters</h1>
      <nav>
        <ul class="container">
          <li v-for="(page, i) in pages">
            {{ page }}
            <span v-if="i < pages.length - 1"> > </span>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    pages: ['Home', 'Detail', 'Comics'],
  }),
};
</script>

<style lang="scss" scoped>
header {
  background: #000;
  display: flex;
  flex-direction: column;
  h1 {
    align-items: center;
    color: #fff;
    display: flex;
    height: 100px;
  }

  nav {
    align-items: center;
    background-color: rgb(107, 107, 107);
    color: #fff;
    display: flex;
    height: 30px;
    ul {
      display: flex;
      list-style: none;
      padding: 0;
      width: 100%;
      li {
        margin-left: 5px;
        &:first-child {
          margin: 0;
        }
      }
    }
  }
}
</style>
