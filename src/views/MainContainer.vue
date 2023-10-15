<template>
  <main class="main-container">
    <section id="title-page" class="child">
      <MainPageTitle class="main-title" />
    </section>
    <section id="about-me" class="child">
      <AboutMe />
    </section>
    <section id="my-meetup" class="child">
      <MyMeetup />
    </section>
    <section id="resume" class="child">
      <WorkDone />
    </section>
  </main>
</template>

<script setup lang="ts">
import MainPageTitle from "@/views/TitlePage.vue";
import AboutMe from "@/views/AboutMe.vue";
import MyMeetup from "./MyMeetup.vue";
import WorkDone from "./ResumePage.vue";
</script>

<style lang="css" scoped>
.main-container {
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.child {
  display: flex;
  min-height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
}

.main-title {
  margin-bottom: 150px;
}
</style>
