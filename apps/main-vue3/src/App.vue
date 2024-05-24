<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="main-app">
    <div class="nav">
      <RouterLink to="/">介绍</RouterLink>
      <RouterLink to="/react18">react18</RouterLink>
      <RouterLink to="/vue3">vue3</RouterLink>
    </div>
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.main-app {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100vw;
  height: 100vh;
}

.nav {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100vh;
  box-sizing: border-box;
  padding: 30px 0;
  box-shadow: 2px 0px 9px 3px #e6e6e6;
  transition: transform 0.1s linear;
  transform: translate(0, 0);
  overflow: auto;
}

.nav a {
  display: flex;
  align-items: center;
  padding: 10px 30px;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  transition: all 0.2s linear;
}

.nav a:hover {
  color: rgb(241, 107, 95);
}

.nav a.router-link-active {
  color: rgb(241, 107, 95);
  background: rgba(0, 0, 0, 0.05);
}
.content {
  flex: 1;
  height: 100vh;
  overflow: hidden scroll;
  width: 1px;
  padding: 10px;
  box-sizing: border-box;
}
</style>
