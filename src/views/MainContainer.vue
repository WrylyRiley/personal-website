<template>
  <main class="container">
    <section
      id="title-page"
      @mouseover="stash.activeLink = 'title-page'"
      class="child"
    >
      <MainPageTitle class="main-title" />
    </section>
    <section
      id="about-me"
      @mouseover="stash.activeLink = 'about-me'"
      class="child"
    >
      <AboutMe />
    </section>
    <section
      id="my-meetup"
      @mouseover="stash.activeLink = 'my-meetup'"
      class="child"
    >
      <MyMeetup />
    </section>
    <section id="resume" @mouseover="stash.activeLink = 'resume'" class="child">
      <WorkDone />
    </section>
    <section
      id="skoolie-adventure"
      @mouseover="stash.activeLink = 'skoolie-adventure'"
      class="child"
    >
      <SkoolieAdventure />
    </section>
  </main>
</template>

<script setup lang="ts">
import MainPageTitle from "@/views/TitlePage.vue";
import AboutMe from "@/views/AboutMe.vue";
import MyMeetup from "./MyMeetup.vue";
import WorkDone from "./ResumePage.vue";
import SkoolieAdventure from "./SkoolieAdventure.vue";
import { stash } from "@/stash";
</script>

<style lang="css" scoped>
.container {
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
  /* border: 1px solid red;
  padding: 1px 1px 1px 1px; */
  scroll-snap-align: start;
}

.main-title {
  margin-bottom: 150px;
}
</style>
