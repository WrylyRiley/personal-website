<script setup lang="ts">
import HeaderMain from "@/components/Header/HeaderMain.vue";
import FooterMain from "@/components/Footer/FooterMain.vue";
import MainContainer from "@/views/MainContainer.vue";
import { onMounted, onUnmounted, ref } from "vue";

const innerHeight = ref(window.innerHeight);
const scrollY = ref(window.scrollY);
const page = ref(innerHeight.value / scrollY.value);

onMounted(() => {
  window.addEventListener("resize", () => {
    innerHeight.value = window.innerHeight;
    console.log(innerHeight);
  });
  window.addEventListener("scroll", () => {
    scrollY.value = window.scrollY;
    console.log(innerHeight);
  });
});

// onUnmounted(() => {
//   window.removeEventListener(
//     "resize",
//     () => (height.value = window.innerHeight)
//   );
// });
</script>

<template>
  <HeaderMain :currentPage="page" />
  <MainContainer class="main-bg" />
  <FooterMain />
</template>

<style lang="css" scoped>
.main-bg {
  background-color: var(--light-bg-color);
  height: calc(100vh - 35px);
  width: 100vw;
  margin: 0rem;
  padding: 0rem;
}

@media (min-width: 500px) {
  .main-bg {
    height: calc(100vh - 85px);
  }
}
</style>
