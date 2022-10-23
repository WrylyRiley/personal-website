<template>
  <header class="header-main">
    <HeaderItem
      v-for="headerItem in listOfHeaderItems"
      :key="headerItem.title + headerItem.link"
      :title="headerItem.title"
      :link="headerItem.link"
      :icon="headerItem.icon"
    />
  </header>
</template>

<script setup lang="ts">
import { readonly } from "vue";
import HeaderItem from "./HeaderItem.vue";
</script>

<script lang="ts">
interface HeaderContentItem {
  title: string;
  link: string;
  icon?: string;
}

const listOfHeaderItems: Readonly<HeaderContentItem[]> = readonly([
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Meetup",
    link: "/meetup",
  },
  {
    title: "Resume",
    link: "/resume",
  },
  {
    title: "Skoolie",
    link: "/skoolie",
  },
]);

export default {
  data() {
    return {
      listOfHeaderItems,
    };
  },
};
</script>

<style lang="css" scoped>
.header-main {
  display: flex;
  position: sticky;
  top: 0;
  align-items: center;
  justify-content: center;
}
</style>
