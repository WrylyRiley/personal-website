<template>
  <a :href="`#${link}`" class="link">
    <div class="nav-button">
      {{ title }}
    </div>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  link: string;
}>();
</script>

<style lang="css" scoped>
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
