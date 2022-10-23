<script setup lang="ts">
import { RouterView } from "vue-router";
import MainHeader from "./components/Header/MainHeader.vue";
import MainFooter from "./components/Footer/MainFooter.vue";
</script>

<template>
  <MainHeader />
  <RouterView class="main-bg" />
  <MainFooter />
</template>

<style lang="css" scoped>
.main-bg {
  background-color: var(--light-bg-color);
  height: calc(100vh - 75px);
  width: 100vw;
  margin: 0px;
  padding: 0px;
}
</style>
