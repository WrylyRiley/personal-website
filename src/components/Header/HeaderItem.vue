<template>
  <a :href="`#${link}`" class="link" :class="isActive">
    <div class="nav-button">
      {{ title }}
    </div>
  </a>
</template>

<script setup lang="ts">
import { stash } from "@/stash";
import { reactive } from "vue";
const props = defineProps<{
  title: string;
  link: string;
}>();

const isActive = reactive({ "active-link": props.link == stash.activeLink });
</script>

<style lang="css" scoped>
.active-link {
  color: var(--text) !important;
}

.nav-button {
  text-decoration: none;
  height: 50px;
  width: 75px;
  color: var(--nav-link-unselected);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 1px;
  transition: all 0.5s ease;
}

.link :hover {
  color: var(--nav-link-hover);
}

.link {
  text-decoration: none;
  height: 50px;
  width: 100px;
}
</style>
