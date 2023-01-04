<template>
  <div class="resume-page">
    <RocketMoneyResumeItem />
    <UpsideResumeItem />
    <DeloitteResumeItem />
    <h5>
      <a target="_blank" :href="resumeLink" class="pill ts-blue resume-link">
        Here's my full resume!</a
      >
    </h5>
  </div>
</template>

<script setup lang="ts">
import DeloitteResumeItem from "@/components/Resume/DeloitteResumeItem.vue";
import UpsideResumeItem from "@/components/Resume/UpsideResumeItem.vue";
// eslint-disable-next-line max-len
import RocketMoneyResumeItem from "@/components/Resume/RocketMoneyResumeItem.vue";

const resumeLink =
  // eslint-disable-next-line max-len
  "https://drive.google.com/file/d/12UiJGDCOIYsj7jz8NdMiJnccCmtoQzZh/view?usp=sharing";
</script>

<style lang="css" scoped>
.resume-page {
  width: 95vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
}

.resume-link {
  margin-top: 2rem;
  text-decoration: none;
  text-decoration: underline;
  align-self: center;
}

@media (min-width: 1100px) {
  .resume-page {
    width: 75vw;
  }
}
</style>
