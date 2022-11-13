<script setup lang="ts">
import HeaderMain from "@/components/Header/HeaderMain.vue";
import FooterMain from "@/components/Footer/FooterMain.vue";
import MainContainer from "@/views/MainContainer.vue";
</script>

<template>
  <HeaderMain />
  <MainContainer class="main-bg" />
  <FooterMain />
</template>

<style lang="css" scoped>
.main-bg {
  background-color: var(--light-bg-color);
  height: calc(100vh - 50px);
  width: 100vw;
  margin: 0rem;
  padding: 0rem;
}

@media (min-width: 500px) {
  .main-bg {
    height: calc(100vh - 100px);
  }
}
</style>
