<template>
  <div class="job" :class="windowWidth < 500 ? 'left' : 'right'">
    <div :class="windowWidth < 500 ? 'left' : 'right'">
      <h3 class="company">
        <span class="title pill upside-purple">Upside Business travel</span>
      </h3>
      <h4 class="date">Jan 2020 - August 2021</h4>
    </div>
    <h5 class="content" :class="windowWidth < 500 ? 'left' : 'right'">
      <div>
        I worked on a full-stack, B2B web app using
        <span class="pill react-blue">React</span> for businesses to manage
        travel for their employees. We persevered as long as we could through
        the pandemic and never stopped working towards adding new and exciting
        features to the platform.
      </div>
    </h5>
  </div>
</template>

<script setup lang="ts">
import { useWindowResize } from "@/helpers/useWindowResize";
import "./resume.css";

const { windowWidth } = useWindowResize();
</script>
