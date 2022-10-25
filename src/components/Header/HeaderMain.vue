<template>
  <header class="header-main">
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
  { title: "Home", link: "/" },
  { title: "Meetup", link: "/meetup" },
  { title: "Resume", link: "/resume" },
  { title: "Skoolie", link: "/skoolie" },
];
</script>

<style lang="css" scoped>
.header-main {
  display: flex;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  background-color: var(--nav-bar-color);
  transition: background-color 1s ease;
}
</style>
