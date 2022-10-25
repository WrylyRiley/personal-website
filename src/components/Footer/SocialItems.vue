<template>
  <div class="container">
    <a href="https://www.linkedin.com/rileybauerdev">
      <LinkedInIcon class="icon" />
    </a>
    <a href="https://www.twitter.com/pixelrabbitcode">
      <TwitterIcon class="icon" />
    </a>
    <a href="mailto:wryr1ley@gmail.com">
      <EmailIcon class="icon" />
    </a>
  </div>
</template>

<script setup lang="ts">
import LinkedInIcon from "@/assets/icons/LinkedInIcon.vue";
import TwitterIcon from "@/assets/icons/TwitterIcon.vue";
import EmailIcon from "@/assets/icons/EmailIcon.vue";
</script>

<style lang="css" scoped>
.icon {
  height: 1rem;
  width: 1rem;
  fill: var(--text);
}
</style>
