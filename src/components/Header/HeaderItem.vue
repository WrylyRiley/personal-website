<script setup lang="ts">
defineProps<{
  title: string;
  link: string;
}>();
</script>

<template>
  <RouterLink :to="link" class="router-link">
    <div class="nav-button">
      {{ title }}
    </div>
  </RouterLink>
</template>

<script lang="ts">
import router from "@/router";
import { reactive } from "vue";

const currentRoute = reactive(router.currentRoute.value);
export default {
  data() {
    return {
      currentRoute: currentRoute.path,
    };
  },
};
</script>

<style lang="css" scoped>
.router-link-exact-active .nav-button {
  color: var(--text);
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

.router-link :hover {
  color: var(--nav-link-hover) !important;
}

.router-link {
  text-decoration: none;
  height: 50px;
  width: 100px;
}
</style>
