<template>
  <footer>
    <DarkModeSwitch />
    <h6 class="footer-text">
      Copyright {{ new Date().getFullYear() }}: Riley Bauer 🐰
    </h6>
  </footer>
</template>

<script setup lang="ts">
import DarkModeSwitch from "./DarkModeSwitch.vue";
</script>

<style lang="css" scoped>
footer {
  height: 25px;
  width: 100vw;
  position: sticky;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--nav-bar-color);
}

.footer-text {
  margin-right: 25px;
}
</style>
