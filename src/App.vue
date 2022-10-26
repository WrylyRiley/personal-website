<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderMain from "./components/Header/HeaderMain.vue";
import FooterMain from "./components/Footer/FooterMain.vue";
</script>

<template>
  <HeaderMain />
  <div class="main-bg">
    <RouterView />
  </div>
  <FooterMain />
</template>

<style lang="css" scoped>
.main-bg {
  background-color: var(--light-bg-color);
  height: calc(100vh - 85px);
  width: 100vw;
  margin: 0rem;
  padding: 0rem;
}
</style>
