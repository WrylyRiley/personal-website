<template>
  <div class="resume-page">
    <RocketMoneyResumeItem class="item" />
    <UpsideResumeItem class="item" />
    <DeloitteResumeItem class="item" />
    <a target="_blank" :href="resumeLink" class="pill ts-blue resume-link">
      Here's my full resume!</a
    >
  </div>
</template>

<script setup lang="ts">
import DeloitteResumeItem from "@/components/Resume/DeloitteResumeItem.vue";
import UpsideResumeItem from "@/components/Resume/UpsideResumeItem.vue";
// eslint-disable-next-line max-len
import RocketMoneyResumeItem from "@/components/Resume/RocketMoneyResumeItem.vue";

const resumeLink =
  // eslint-disable-next-line max-len
  "https://drive.google.com/file/d/1rydAUgFGIs4mNFpZSWIF0QFZ3UHtkObj/view?usp=sharing";
</script>

<style lang="css" scoped>
.resume-page {
  width: 95vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid rebeccapurple;
}

.resume-link {
  margin-top: 2rem;
  text-decoration: none;
  color: var(--text);
  text-decoration: underline;
  align-self: center;
}
</style>
