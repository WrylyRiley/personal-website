<template>
  <div class="job center-center" :class="orientation">
    <div class="header" :class="orientation">
      <p class="company">Rocket Money (Formerly Truebill)</p>
      <p class="date-range">Current!</p>
    </div>
    <p class="content" :class="orientation">
      I've done a lot here, but that information can come later...
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ orientation: "left" | "right" }>();
</script>

<style lang="css" scoped>
.left {
  text-align: left;
}

.right {
  text-align: right;
}

.job {
  flex-direction: column;
}

.header {
}
</style>
