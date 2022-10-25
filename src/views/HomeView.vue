<template>
  <main class="container">
    <section class="child">
      <MainPageTitle class="main-title" />
    </section>
    <section class="child">
      <AboutMe />
    </section>
    <section class="child">
      <!-- Idk, contact stuff? -->
    </section>
  </main>
</template>

<script setup lang="ts">
import MainPageTitle from "@/views/HomeView/TitlePage.vue";
import AboutMe from "@/views/HomeView/AboutMe.vue";
</script>

<style lang="css" scoped>
.container {
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.child {
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red;
  padding: 1px 1px 1px 1px; */
  scroll-snap-align: start;
}

.main-title {
  margin-bottom: 150px;
}
</style>
