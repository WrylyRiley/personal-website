<template>
  <div class="center-center">
    <a href="https://www.linkedin.com/rileybauerdev">
      <LinkedInIcon class="icon" />
    </a>
    <a href="https://www.twitter.com/pixelrabbitcode">
      <TwitterIcon class="icon" />
    </a>
    <a href="mailto:rileyis@herdeskworking.com">
      <EmailIcon class="icon" />
    </a>
  </div>
</template>

<script setup lang="ts">
import LinkedInIcon from "@/assets/icons/BrandLogos/LinkedInIcon.vue";
import TwitterIcon from "@/assets/icons/BrandLogos/TwitterIcon.vue";
import EmailIcon from "@/assets/icons/EmailIcon.vue";
</script>

<style lang="css" scoped>
a {
  text-decoration: none;
  margin-right: 0rem;
}
.icon {
  height: 1.5rem;
  width: 1.5rem;
  fill: var(--text);
  margin: 0;
}
</style>
