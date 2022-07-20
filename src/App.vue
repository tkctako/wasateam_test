<template>
  <div id="app">
    <h1>山葵組線上測驗</h1>
    <nav>
      <router-link to="/">選擇輸入樣式</router-link> |
      <router-link to="/about">串接列表資料</router-link>
    </nav>
    <h2 class="mb-5">{{ title }}</h2>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  computed:{
    title() {
      return this.$root.title;
    }
  }
}
</script>
<style lang="scss">
@import './assets/all.scss';
#app {
  text-align: center;
  color: $primary-color;
  margin-top: 2rem;
}
nav {
  padding: 20px;
}
nav a {
  font-weight: 500;
  color: $primary-color;
}
nav a.router-link-exact-active {
  color: #42b983;
  pointer-events:none;
}
</style>
