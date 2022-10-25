<template>
  <ArrowDownIcon class="arrow" />
</template>

<script setup lang="ts">
import ArrowDownIcon from "@/assets/icons/ArrowDownIcon.vue";
</script>

<style>
.arrow {
  width: 75px;
  height: 75px;
  margin-top: 50px;
  animation: shake ease 10s infinite;
}

@keyframes shake {
  0%,
  100% {
    transform: translateY(0);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateY(-8px);
  }
  20%,
  40%,
  60%,
  80% {
    transform: translateY(8px);
  }
}
</style>
