<template>
  <header class="header-main center-center">
    <HeaderItem
      v-for="headerItem in listOfHeaderItems"
      :key="'HeaderItem - ' + headerItem.title"
      :title="headerItem.title"
      :link="headerItem.link"
    />
  </header>
</template>

<script setup lang="ts">
import HeaderItem from "./HeaderItem.vue";

const listOfHeaderItems: {
  title: string;
  link: string;
}[] = [
  { title: "Home", link: "title-page" },
  { title: "About Me", link: "about-me" },
  { title: "Meetup", link: "my-meetup" },
  { title: "Resume", link: "resume" },
  // { title: "Skoolie", link: "skoolie-adventure" },
];
</script>

<style lang="css" scoped>
@media (max-width: 500px) {
  .header-main {
    display: none;
  }
}
.header-main {
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  background-color: var(--nav-bar-color);
  transition: background-color 1s ease;
}
</style>
